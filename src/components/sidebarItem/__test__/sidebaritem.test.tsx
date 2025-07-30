import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import SidebarItem from "../sidebaritem"
import UserIcon from "@/assets/svgs/user-friends 1.svg"

describe("SidebarItem", () => {
  it("renders a sidebar item", () => {
    render(<SidebarItem title='Home' />)
    const sidebarItem = screen.getByRole("listitem")

    expect(sidebarItem).toBeInTheDocument()
  })

  it("renders a sidebar item with an icon", () => {
    render(<SidebarItem title='Home' icon={UserIcon} />)
    const sidebarItem = screen.getByRole("listitem")
    const image = screen.getByRole("img")
    const imageAltText = image.getAttribute("alt")

    expect(sidebarItem).toBeInTheDocument()
    expect(imageAltText).toBe("SidebarIcon")
  })

  it("renders a sidebar item with an extra icon", () => {
    render(<SidebarItem title='Home' icon={UserIcon} extraIcon={UserIcon} />)
    const sidebarItem = screen.getByRole("listitem")
    const image = screen.getByRole("img", {name: "extraIcon"})
    const imageAltText = image.getAttribute("alt")

    expect(sidebarItem).toBeInTheDocument()
    expect(imageAltText).toBe("extraIcon")
  })

  it("renders a sidebar item with an active state", () => {
    render(<SidebarItem title='Home' icon={UserIcon} active />)
    const sidebarItem = screen.getByRole("listitem")
    const image = screen.getByRole("img")
    const imageAltText = image.getAttribute("alt")

    expect(sidebarItem).toBeInTheDocument()
    expect(imageAltText).toBe("SidebarIcon")
    expect(sidebarItem).toHaveStyle({
      backgroundColor: "#39CDCC30",
      borderLeft: "4px solid #39CDCC",
    })
  })
})
