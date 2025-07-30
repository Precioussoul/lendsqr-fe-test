import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import DetailItem from "../detail-item"

describe("DetailItem", () => {
  it("renders a heading", () => {
    render(<DetailItem title='Feature A' subtitle='this is feature A' />)

    const heading = screen.getByRole("heading", {level: 3})

    expect(heading).toBeInTheDocument()
  })

  it("renders a subtitle", () => {
    render(<DetailItem title='Feature B' subtitle='this is feature B' />)

    const subtitle = screen.getByText("this is feature B")

    expect(subtitle).toBeInTheDocument()
  })
})
