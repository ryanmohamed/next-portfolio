import styles from '../Projects.module.css'
import SkillLayout from "../../../layout/SkillLayout/SkillLayout"
import Construction from '../../../components/Construction/Construction'

function C(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>
            <Construction />
        </div>
    )
}

C.pageLayout = SkillLayout
export default C