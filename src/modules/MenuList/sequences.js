import { state } from "cerebral/tags";
import { toggle } from "cerebral/operators";
import { handlePACListOpen } from "../PACList/sequences"; 

export let handleMenuListOpen = [toggle(state`MenuList.open`)];

export function setCurrentItem({props, state}){
  if(props.item)
    state.set(`MenuList.current`, props.item);
}

export let pacList = [
	handleMenuListOpen,
	handlePACListOpen,
  pacList_action
];

export function pacList_action({props, state}) {
	console.log("PAC List ->");
}

export let blockchain = [
	handleMenuListOpen,
  blockchain_action
];

export function blockchain_action(){
	console.log("Blockchain ->");
}

export let trellisRepo = [
	handleMenuListOpen,
  trellisRepo_action
];

export function trellisRepo_action({props, state}){
	console.log("Trellis Repo");
}

