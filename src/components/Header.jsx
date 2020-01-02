// "components/Header.jsx"
import React             from "react";
import { connect }       from "@cerebral/react";
import { state }         from "cerebral/tags";
import { withStyles }    from "@material-ui/core/styles";
import Typography        from "@material-ui/core/Typography";
import { useStyles }     from "./config.js";

class Header extends React.Component {

	render() {
		const { classes } = this.props;

		return (
			<div className={!this.props.open ? classes.hidden : classes.pill}>
				<Typography variant="subtitle1" gutterBottom style={{color: "#66ccff"}}>
					{this.props.osc.title}
				</Typography>
			</div>
		)
	}//render

}

export default connect(
	{
		open: state`Header.open`,
		osc:  state`oscs.osc`
	},
	withStyles(useStyles, {withTheme: true})(Header)
);

