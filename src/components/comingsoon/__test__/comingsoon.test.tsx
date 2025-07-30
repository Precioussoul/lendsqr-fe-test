import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import ComingSoon from "../comingsoon"

describe("ComingSoon", () => {
  it("renders a heading", () => {
    render(<ComingSoon featureName='this feature' />)

    const heading = screen.getByRole("heading", {level: 2})

    expect(heading).toBeInTheDocument()
  })

  it("renders a message", () => {
    render(<ComingSoon featureName='this feature' />)

    const message = screen.getByText("We're working hard to bring you this feature. Please check back later!")

    expect(message).toBeInTheDocument()
  })

  it("renders image", () => {
    render(<ComingSoon featureName='this feature' />)

    const image = screen.getByRole("img")
    const imageAltText = image.getAttribute("alt")

    expect(image).toBeInTheDocument()
    expect(imageAltText).toBe("Under Construction")
  })
})
