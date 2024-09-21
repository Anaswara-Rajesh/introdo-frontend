import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import DropdoownBtn from "./DropdoownBtn";
import { MdKeyboardArrowDown } from "react-icons/md";

function renderDropdown(title: any, items: any) {
  return (
    <NavDropdown
    title={
      <span>
        {title} <MdKeyboardArrowDown className="custom-arrow ms-1" />
      </span>
    }
    key={title}
    className="ps-4"
  >
    {items.map((item: any, index: any) => (
      <NavDropdown.Item key={index} href={item.href}>
        {item.label}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
  );
}

function renderNavItem(item: any) {
  return (
    <Nav.Link key={item.label} href={item.href} className="ps-5">
      {item.label}
    </Nav.Link>
  );
}

function MainNavbar() {
  const navItems = [
    {
      type: "dropdown",
      title: "Products",
      items: [
        { label: "Action 1", href: "#action1" },
        { label: "Action 2", href: "#action2" },
      ],
    },
    {
      type: "dropdown",
      title: "Solutions",
      items: [
        { label: "Action 1", href: "#action1" },
        { label: "Action 2", href: "#action2" },
      ],
    },
    { type: "link", label: "Pricing", href: "#pricing" },
    { type: "link", label: "Partner Program", href: "#features" },
    {
      type: "dropdown",
      title: "Resources",
      items: [
        { label: "Action 1", href: "#action1" },
        { label: "Action 2", href: "#action2" },
      ],
    },
    {
      type: "dropdown",
      title: "About Us",
      items: [
        { label: "Action 1", href: "#action1" },
        { label: "Action 2", href: "#action2" },
      ],
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) =>
              item.type === "dropdown"
                ? renderDropdown(item.title, item.items)
                : renderNavItem(item)
            )}
          </Nav>
          <Nav>
            <Nav.Link href="#en-btn">
              <DropdoownBtn customStyle="custom-dropdown-btn"/>
            </Nav.Link>
            <Nav.Link href="#login-btn" className="ps-4">
              <button type="button" className="login-btn">
                <span className="ps-1">Log In</span>
                <img className="ps-2" src="./login.svg"></img>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
