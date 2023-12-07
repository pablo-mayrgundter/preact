import { useLocation } from 'preact-iso'


/**
 * @return {object} The page header
 */
export function Header() {
  const { url } = useLocation()
  const rootPrefix = import.meta.env.BASE_URL
  const rootLink = rootPrefix
  const notFoundLink = `${rootPrefix}/404`
  return (
    <header>
      <nav>
        <a href={rootLink} class={url === rootLink && 'active'}>
          Home
        </a>
        <a href={notFoundLink} class={url === notFoundLink && 'active'}>
          404
        </a>
      </nav>
    </header>
  )
}
