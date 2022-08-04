import { NavLink as NavLinkReactRouter } from 'react-router-dom'

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? 'is-active' : undefined
      }}>
      {children}
    </NavLinkReactRouter>

  )
}

export default NavLink
