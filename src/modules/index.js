import { Module } from "cerebral";

import oadaModule   from "@oada/cerebral-module";
import oadaProvider from "@oada/cerebral-provider";

import App          from "./App";
import MenuList     from "./MenuList";
import PACList      from "./PACList";
import ControlList  from "./ControlList";
import Connections  from "./Connections";
import oscs         from "./oscs";
import pacs         from "./pacs";
import privatedatas from "./privatedata";

export default Module({
  modules: {
		App,
		MenuList,
		PACList,
		ControlList,
		Connections,
		oscs,
		pacs,
		privatedatas,
		oada: oadaModule
	},

	providers: {
		oada: oadaProvider
	}
})
