import styles from './Projects.module.css'
import SkillLayout from "../../layout/SkillLayout/SkillLayout"

function IA(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>
            <div className={styles.Projects_Container} >
                <h1>bia</h1>
            </div>
        </div>
    )
}

IA.pageLayout = SkillLayout
export default IA