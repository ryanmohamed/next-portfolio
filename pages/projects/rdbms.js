import styles from './Projects.module.css'
import SkillLayout from "../../layout/SkillLayout/SkillLayout"

function RDBMS(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>

            <div className={styles.Projects_Container} >
                <h1>rdbms</h1>
            </div>
        
        </div>
    )
}

RDBMS.pageLayout = SkillLayout
export default RDBMS