import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

const MarkdownRenderer = ({ content }) => 
{
    // Define custom component override
    const components =
    {
      a: ({ node, href, children, ...props }) =>
      {
        // Check if the link is internal
        const isInternal = href && (href.startsWith('/') || !href.includes('http'));

        if (isInternal)
        {
          return (
            <Link to={href} {...props} className="text-blue-600 hover:underline">
              {children}
            </Link>
          );
        }

        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        )
      }
    }

  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer