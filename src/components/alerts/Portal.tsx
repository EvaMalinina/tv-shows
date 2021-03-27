import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: React.ReactNode,
  className: string,
  el: string
}

const Portal = ({ children, className, el }: IPortalProps) => {
  const [container] = useState(document.createElement(el))

  container.classList.add(className)

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

Portal.defaultProps = {
  className: 'root-portal',
  el: 'div'
}

export default Portal;