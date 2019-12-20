// "components/ControlList.jsx"
import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import StorageIcon from "@material-ui/icons/Storage";
import GeneratePACIcon from "@material-ui/icons/HourglassEmpty";
import RestartIcon from "@material-ui/icons/RestorePage";
import TurnoffIcon from "@material-ui/icons/PowerSettingsNew";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { withStyles } from "@material-ui/core/styles";
import { useStyles, backColor } from "./config.js";
import { green } from '@material-ui/core/colors';

class ControlList extends React.Component {

	getColor(value) {
    return value ? '#ffcc66' : green[500];
	}
	renderOSCControlSignals( params ) {
    const { osc, classes } = params;
		if (osc) {
			const listColor = {backgroundColor: '#666666'};
			const basicStyle = { color: green[500], marginLeft: '30px' };
			const tokenStyle = { color: green[500], marginLeft: '30px' };
			tokenStyle.color = this.getColor(osc.control_signals.token === "");
			const dataStyle = { color: green[500], marginLeft: '30px' };
			dataStyle.color = this.getColor(osc.control_signals.private_data === "");
			const generatePACStyle = { color: green[500], marginLeft: '30px' };
			generatePACStyle.color = this.getColor(!osc.control_signals.generate_pac);
			const restartStyle = { color: '#ffffff', marginLeft: '30px' };
			const turnoffStyle = { color: '#ffffff', marginLeft: '30px' };

			return (
				<div key={osc.id} className={classes.pill} style={listColor}>
					<VpnKeyIcon style={tokenStyle}/>
					<StorageIcon style={dataStyle}/>
					<GeneratePACIcon style={generatePACStyle}/>
					<RestartIcon style={restartStyle}/>
					<TurnoffIcon style={turnoffStyle}/>
				</div>
			);
		} else {
			return null;
	  }
	}//renderControlSignals

	render() {
		const { classes } = this.props;

		return (
			<div className={!this.props.open ? classes.hidden : classes.icons}>
        {
					  Object.keys(this.props.osc || {}).map(oscid => {
						return this.renderOSCControlSignals(
							{
								osc:     this.props.osc[oscid],
								classes: classes
							});
						})
				}
			</div>
		)
	}//render
}

export default connect(
	{
		open: state`ControlList.open`,
		osc: state`ControlList.osc`
	},
	withStyles(useStyles, {withTheme: true})(ControlList)
);
