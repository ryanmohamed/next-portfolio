import SidePanel from '../../components/SidePanel/SidePanel'
import SidePanelLink from '../../components/SidePanel/SidePanelLink'
import styles from './SkillLayout.module.css'
import Link from 'next/link'

export default function SkillLayout ({children}){
    return ( 
        <div className={styles.SkillLayout}>
            <SidePanel>
                
                <SidePanelLink 
                    title='Fullstack' 
                    href='/projects/fullstack' 
                    notes={['Node.js', 'React.js', 'Next.js']}
                />

                <SidePanelLink 
                    title='RDBMS' 
                    href='/projects/rdbms'
                    notes={['SQL', 'T-SQL', 'SMSS', 'Data Modeling', 'Azure Data Studio']}
                />

                <SidePanelLink 
                    title='C / C++' 
                    href='/projects/c'
                    notes={['OOP', 'POSIX', 'Linux / UNIX', 'C++17', 'CMake']}
                />

                <SidePanelLink 
                    title='Image Analysis' 
                    href='/projects/bia'
                    notes={['Python3', 'Pandas', 'NumPy', 'Keras']}
                />
                
            </SidePanel>
            {children}
        </div>
    )
}