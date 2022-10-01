import NavSection from "./NavSection"
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = () => {
    return {}
}

const NavSectionContainer = connect(mapStateToProps, mapDispatchToProps)(NavSection)

export default NavSectionContainer