import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import SearchInput from "../searchInput"

describe("SearchInput", () => {
  it("renders a input", () => {
    render(<SearchInput />)
    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument()
  })

  it("renders a search input and change its value", () => {
    render(<SearchInput />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "Grace"}})
    expect(input).toHaveValue("Grace")
  })

  it("should have a search icon img", () => {
    render(<SearchInput />)
    const image = screen.getByRole("img")
    const imageAltText = image.getAttribute("alt")

    expect(image).toBeInTheDocument()
    expect(imageAltText).toBe("Search Icon")
  })
})
