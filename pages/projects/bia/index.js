import styles from '../Projects.module.css'
import SkillLayout from "../../../layout/SkillLayout/SkillLayout"
import Construction from '../../../components/Construction/Construction'
function IA(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>
            <Construction />
        </div>
    )
}

IA.pageLayout = SkillLayout
export default IA