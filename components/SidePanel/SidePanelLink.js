import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './SidePanel.module.css'

export default function SkillPanelLink ({title, notes, children, collapse, href}) {
    
    const router = useRouter()

    return (
        <ul>

            <Link scroll={false} href={href} onClick={collapse}>
                <h1 className={ router.pathname != href ? undefined : styles.Highlight } >{title}</h1>
            </Link>

            {notes?.map( note => (
                <li key={note} >{note}</li>
            ))}

        </ul>
    )
}