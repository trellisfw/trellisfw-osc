// "components/ControlList.jsx"
import React from "react";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import StorageIcon from '@material-ui/icons/Storage';
import GeneratePACIcon from '@material-ui/icons/HourglassEmpty';
import RestartIcon from '@material-ui/icons/RestorePage';
import TurnoffIcon from '@material-ui/icons/PowerSettingsNew';
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { withStyles } from "@material-ui/core/styles";
import { useStyles, backColor } from "./config.js";
import { green } from '@material-ui/core/colors';

class ControlList extends React.Component {

  renderOSCControlSignals( params ) {
    const { osc, classes } = params;
		if (osc) {
			const listColor = {backgroundColor: '#666666'};
			const tokenStyle = { color: green[500], marginLeft: '15px' };
			const dataStyle = { color: green[500], marginLeft: '15px' };
			const generatePACStyle = { color: green[500], marginLeft: '15px' };
			dataStyle.color = '#ffcc66';
			generatePACStyle.color = '#ffcc66';
			const restartStyle = { color: '#ffffff', marginLeft: '15px' };
			const turnoffStyle = { color: '#ffffff', marginLeft: '15px' };

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
					  Object.keys(this.props.osc || {}).map(osc => {
						return this.renderOSCControlSignals(
							{
								osc:     this.props.osc,
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
/*
					<ListItem className={`${classes.pill}`} style={listColor}
                    key={pac.id}
				  >
						<ListItemAvatar>
							<Avatar style={avaColor}>
				      {pac.label}
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={pac.title || null} 
				                  secondary={pac.timestamp || null} />
						<Button
							variant="outlined"
							color="default"
				      size="small"
							className={classes.button}
							startIcon={<CheckedIcon />}
				      onClick={this.props.verifySignature}
						 >
						  Verify	
						</Button>
					</ListItem>
						*/
