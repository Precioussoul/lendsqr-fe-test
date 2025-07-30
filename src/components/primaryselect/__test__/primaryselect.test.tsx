import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import PrimarySelect from "../PrimarySelect"
import {SelectOption} from "../PrimarySelect"
import userEvent from "@testing-library/user-event"

describe("PrimarySelect Component", () => {
  const mockOptions: SelectOption[] = [
    {value: "option1", label: "Option 1"},
    {value: "option2", label: "Option 2"},
    {value: "option3", label: "Option 3", disabled: true},
  ]

  const defaultProps = {
    id: "test-select",
    options: mockOptions,
    onChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders with label when provided", () => {
    const label = "Test Label"
    render(<PrimarySelect {...defaultProps} label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })

  it("renders without label when not provided", () => {
    render(<PrimarySelect {...defaultProps} />)
    expect(screen.queryByTestId("select-label")).not.toBeInTheDocument()
  })

  it("displays all options", () => {
    render(<PrimarySelect {...defaultProps} />)
    mockOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument()
    })
  })

  it("calls onChange handler when selection changes", async () => {
    render(<PrimarySelect {...defaultProps} />)
    const select = screen.getByRole("combobox")
    await userEvent.selectOptions(select, "option2")
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
  })

  it("displays error message when error prop is provided", () => {
    const errorMessage = "This field is required"
    render(<PrimarySelect {...defaultProps} error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
    expect(screen.getByText(errorMessage)).toHaveClass("error")
  })

  it("applies custom className to container and select element", () => {
    const containerClass = "custom-container"
    const selectClass = "custom-select"
    render(<PrimarySelect {...defaultProps} className={selectClass} containerClassName={containerClass} />)
    expect(screen.getByTestId("select-container")).toHaveClass(containerClass)
    expect(screen.getByRole("combobox")).toHaveClass(selectClass)
  })

  it("disables options marked as disabled", () => {
    render(<PrimarySelect {...defaultProps} />)
    const disabledOption = screen.getByRole("option", {name: "Option 3"})
    expect(disabledOption).toBeDisabled()
  })
})
