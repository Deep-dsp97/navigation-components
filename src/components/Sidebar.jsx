import Link from "./Link";

const Sidebar = () => {

  const links = [
    { label:'Dropdown', path:'/'},
    { label:'Accordion', path:'/accordion'},
    { label:'Button', path:'/buttons'},
    { label:'Modal', path:'/modal'},
  ]

  const renderedLinks = links.map((link) => {
    return <Link className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2" to={link.path} key={link.label}>{link.label}</Link>
  })

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedLinks}
    </div>
  )
}

export default Sidebar