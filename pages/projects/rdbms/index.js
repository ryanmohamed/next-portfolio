import styles from '../Projects.module.css'
import SkillLayout from "../../../layout/SkillLayout/SkillLayout"
import Construction from '../../../components/Construction/Construction'
function RDBMS(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>
            <Construction />
        </div>
    )
}

RDBMS.pageLayout = SkillLayout
export default RDBMS