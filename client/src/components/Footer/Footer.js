import { ExternalLink } from 'react-external-link'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Footer.css'

const Footer = () =>
  <footer>
    <ExternalLink className='external-link' href='https://github.com/jckrft'><GitHubIcon />
    </ExternalLink>
    <ExternalLink className='external-link' href='https://github.com/alexnwarton'><GitHubIcon />
    </ExternalLink>
    <ExternalLink className='external-link' href='https://github.com/sidneypaucar'><GitHubIcon />
    </ExternalLink>
    <ExternalLink className='external-link' href='https://github.com/zachpartin'><GitHubIcon />
    </ExternalLink>
  </footer>

export default Footer