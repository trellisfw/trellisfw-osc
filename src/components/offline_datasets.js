export const pac_dataset = {
	"records": {
		"69e404ac-10c8-45b3-bf08-a37ee848a729": {
			"id": "69e404ac-10c8-45b3-bf08-a37ee848a729",
			"label": "SR",
			"title": "Sustainable Reporting",
			"trust_level": "tl1",
			"oscid": {
				"codebase": "sustainablereporting-v1.0.0",
				"pac": "sustainablereporting-v1.0.0",
				"definition": "https://github.com/trellisfw/osc-definitions"
			},
			"timestamp": "2019-08-14T02:38:32.921Z",
			"lot": "12345",
			"organization": {
				"id": "bc755264-4e68-433e-a431-081e79bcc81c",
				"name": "Bob's Farm"
			},
			"certification_status": "passed",
			"certified_quantity": {
				"value": "10",
				"units": "tons"
			},
			"certified_product": "apple",
			"attestations": {
				"balance": true
			},
			"signatures": [
				{
					"quote": {
						"report": "<base64 encoded report>",
						"mrsigner": "<base64 encoded mrsigner>",
						"mrenclave": "<base64 encoded mrenclave",
						"user_data": "<base64 encoded user data, understood to be hash of PAC> ",
						"value": "<base64 encoded entire quote>"
					}
				}
			],
			"data_hash": {
				"value": "e493999f59c6537c3bc674fb5d5fac6d6437e546fe202025591dee0625ee9bc9",
				"alg": "SHA-256"
			}
		},
		"5d845dc6-c4bc-427f-83b5-c9a84f206f8a": {
			"id": "5d845dc6-c4bc-427f-83b5-c9a84f206f8a",
			"label": "SF",
			"title": "Sustainable Fishing",
			"trust_level": "tl2",
			"oscid": {
				"codebase": "sustainablefishing-v1.0.0",
				"pac": "sustainablefishing-v1.0.0",
				"definition": "https://github.com/trellisfw/osc-definitions"
			},
			"timestamp": "2019-08-14T02:38:32.921Z",
			"lot": "12345",
			"organization": {
				"id": "474fb52f-347a-4b86-947b-1d2f7f3f052f",
				"name": "Alice's Fishing Boat"
			},
			"certification_status": "passed",
			"certified_quantity": {
				"value": "25",
				"units": "tons"
			},
			"certified_product": "tuna",
			"attestations": {
				"caught_within_sustainable_boundaries": true
			},
			"signatures": [
				{
					"quote": {
						"report": "<base64 encoded report>",
						"mrsigner": "<base64 encoded mrsigner>",
						"mrenclave": "<base64 encoded mrenclave",
						"user_data": "<base64 encoded user data, understood to be hash of PAC> ",
						"value": "<base64 encoded entire quote>"
					}
				}
			],
			"data_hash": {
				"value": "e493999f59c6537c3bc674fb5d5fac6d6437e546fe202025591dee0625ee9bc9",
				"alg": "SHA-256"
			}
		},
		"4f2e739b-de9a-4d04-953d-4691227ae9b9": {
			"id": "4f2e739b-de9a-4d04-953d-4691227ae9b9",
			"label": "PD",
			"title": "Planting Date Reporting",
			"trust_level": "tl1",
			"oscid": {
				"codebase": "plantingdate-v1.0.0",
				"pac": "plantingdate-v1.0.0",
				"definition": "https://github.com/trellisfw/osc-definitions"
			},
			"timestamp": "2019-08-14T02:38:32.921Z",
			"lot": "12345",
			"organization": {
				"id": "bc755264-4e68-433e-a431-081e79bcc81c",
				"name": "Bob's Farm"
			},
			"certification_status": "passed",
			"certified_quantity": {
				"value": "25",
				"units": "tons"
			},
			"certified_product": "Corn",
			"attestations": {
				"balance": true
			},
			"signatures": [
				{
					"quote": {
						"report": "<base64 encoded report>",
						"mrsigner": "<base64 encoded mrsigner>",
						"mrenclave": "<base64 encoded mrenclave",
						"user_data": "<base64 encoded user data, understood to be hash of PAC> ",
						"value": "<base64 encoded entire quote>"
					}
				}
			],
			"data_hash": {
				"value": "e493999f59c6537c3bc674fb5d5fac6d6437e546fe202025591dee0625ee9bc9",
				"alg": "SHA-256"
			}
		},
		"07fde5ad-87a6-4e81-b04a-2c83cefec408": {
			"id": "07fde5ad-87a6-4e81-b04a-2c83cefec408",
			"label": "MB",
			"title": "Mass Balance",
			"trust_level": "tl3",
			"oscid": {
				"codebase": "massbalance-v1.0.0",
				"pac": "massbalance-v1.0.0",
				"definition": "https://github.com/trellisfw/osc-definitions"
			},
			"timestamp": "2019-08-14T02:38:32.921Z",
			"lot": "12345",
			"organization": {
				"id": "380f7202-2ccc-4f14-bee7-c2d55c019686",
				"name": "Carol's Mass Balance"
			},
			"certification_status": "passed",
			"certified_quantity": {
				"value": "50",
				"units": "tons"
			},
			"certified_product": "apple",
			"attestations": {
				"organic_apple": true,
				"balance": true
			},
			"signatures": [
				{
					"quote": {
						"report": "<base64 encoded report>",
						"mrsigner": "<base64 encoded mrsigner>",
						"mrenclave": "<base64 encoded mrenclave",
						"user_data": "<base64 encoded user data, understood to be hash of PAC> ",
						"value": "<base64 encoded entire quote>"
					}
				}
			],
			"data_hash": {
				"value": "e493999f59c6537c3bc674fb5d5fac6d6437e546fe202025591dee0625ee9bc9",
				"alg": "SHA-256"
			}
		}
	}
};

export const osc_dataset = {
  "records": {
    "316c9712-5e51-4267-8891-859b6a7cc3b7": {
      "id": "316c9712-5e51-4267-8891-859b6a7cc3b7",
      "oscid": {
        "codebase": "massbalance-v1.0.0",
        "pac": "massbalance-v1.0.0",
        "definition": "https://github.com/trellisfw/osc-definitions"
      },
      "osc_hash": {
        "value": "cbebb6ce455ec34d361a6c544ed6b0a350fc46113e30a73178da2c8a921e3b93",
        "alg": "SHA-256"
      },
      "label": "MB",
      "title": "Organic Mass Balance",
      "date_init": "09.17.2019",
      "timestamp": "2019-08-14T02:38:32.921Z",
      "trust_level": "tl3",
       "organization": {
        "name": "Bob's Mass Balance"
      },
      "control_signals":{
        "restart": false,
        "init_ra": false,
        "turnoff": false,
        "generate_pac": true,
        "private_data": "all",
        "token": "servio"
      },
      "generated_pacs": {
        "pacrandomid1": {},
        "pacrandomid2": {}
      },
      "blockchain_config": {
        "host": "string"
      }
    },
    "3ac90b25-1d17-4eb7-9c51-0f47cfb1417a": {
      "id": "3ac90b25-1d17-4eb7-9c51-0f47cfb1417a",
      "oscid": {
        "codebase": "sustainabilityreporting-v1.0.0",
        "pac": "sustainabilityreporting-v1.0.0",
        "definition": "https://github.com/trellisfw/osc-definitions"
      },
      "osc_hash": {
        "value": "2abe617b8d05a48a7a9b5a1eb461100f548774d76daac5749a20a54b5718617c",
        "alg": "SHA-256"
      },
      "label": "SR",
      "title": "Sustainability Reporting",
      "date_init": "09.17.2019",
      "timestamp": "2019-08-14T02:38:32.921Z",
      "trust_level": "tl1",
       "organization": {
        "name": "Bob's Sustainability Reporting"
      },
      "control_signals":{
        "restart": false,
        "init_ra": false,
        "turnoff": false,
        "generate_pac": true,
        "private_data": "all",
        "token": "servio"
      },
      "generated_pacs": {
        "pacrandomid1": {},
        "pacrandomid2": {}
      }
    },
    
    "3ad9c594-2460-4deb-8c2f-d9e26e69d288": {
      "id": "3ad9c594-2460-4deb-8c2f-d9e26e69d288",
      "oscid": {
        "codebase": "sustainablefishing-v1.0.0",
        "pac": "sustainablefishing-v1.0.0",
        "definition": "https://github.com/trellisfw/osc-definitions"
      },
      "osc_hash": {
        "value": "a5c74730d322d80826ea1f29eb92a37565385c0fdfa5b38741583399b3fea738",
        "alg": "SHA-256"
      },
      "label": "SF",
      "title": "Sustainable Fishing",
      "date_init": "09.17.2019",
      "timestamp": "2019-08-14T02:38:32.921Z",
      "trust_level": "tl2",
       "organization": {
        "name": "Bob's Sustainable Fishing"
      },
      "control_signals":{
        "restart": false,
        "init_ra": false,
        "turnoff": false,
        "generate_pac": true,
        "private_data": "all",
        "token": "servio"
      },
      "generated_pacs": {
        "pacrandomid1": {},
        "pacrandomid2": {}
      }
    },
    
    "940a25b3-da82-4013-8f4c-d18f9c30cdf6": {
      "id": "940a25b3-da82-4013-8f4c-d18f9c30cdf6",
      "oscid": {
        "codebase": "plantingdatereporting-v1.0.0",
        "pac": "plantingdatereporting-v1.0.0",
        "definition": "https://github.com/trellisfw/osc-definitions"
      },
      "osc_hash": {
        "value": "a5c74730d322d80826ea1f29eb92a37565385c0fdfa5b38741583399b3fea738",
        "alg": "SHA-256"
      },
      "label": "PD",
      "title": "Planting Date Reporting",
      "date_init": "09.17.2019",
      "timestamp": "2019-08-14T02:38:32.921Z",
      "trust_level": "tl1",
       "organization": {
        "name": "Bob's Planting Date Reporting"
      },
      "control_signals":{
        "restart": false,
        "init_ra": false,
        "turnoff": false,
        "generate_pac": true,
        "private_data": "all",
        "token": "servio"
      },
      "generated_pacs": {
        "pacrandomid1": {},
        "pacrandomid2": {}
      }
    }
  },
};

export let pac_template = {
			"id": "69e404ac-10c8-45b3-bf08-a37ee848a729",
			"label": "DE",
			"title": "Demo PAC Record",
			"trust_level": "tl1",
			"oscid": {
				"codebase": "demopacrecord-v1.0.0",
				"pac": "sustainablereporting-v1.0.0",
				"definition": "https://github.com/trellisfw/osc-definitions"
			},
			"timestamp": "2019-08-14T02:38:32.921Z",
			"lot": "12345",
			"organization": {
				"id": "bc755264-4e68-433e-a431-081e79bcc81c",
				"name": "Bob's Farm"
			},
			"certification_status": "passed",
			"certified_quantity": {
				"value": "10",
				"units": "tons"
			},
			"certified_product": "demo product",
			"attestations": {
				"balance": true
			},
			"signatures": [
				{
					"quote": {
						"report": "<base64 encoded report>",
						"mrsigner": "<base64 encoded mrsigner>",
						"mrenclave": "<base64 encoded mrenclave",
						"user_data": "<base64 encoded user data, understood to be hash of PAC> ",
						"value": "<base64 encoded entire quote>"
					}
				}
			],
			"data_hash": {
				"value": "00534a6ac0c50e40a6f5293a72b8b320e637cb9a998847d19210af3ce7564eb5",
				"alg": "SHA-256"
			}
};

export let osc_data = {
	0: { title : "Organic Mass Balance", 
		   label : "OB",
		   trust_level: "tl3"
		 },
	1: { title : "Sustainable Fishing", 
		   label : "SF",
		   trust_level: "tl2"
		 },
	2: { title : "Sustainability Reporting", 
		   label : "SR",
		   trust_level: "tl1"
		 },
	3: { title : "Planting Date Reporting", 
		   label : "DR",
		   trust_level: "tl1"
		 },
	4: { title : "Mass Balance", 
		   label : "MB",
		   trust_level: "tl2"
		 },
	5: { title : "Organic Coffee", 
		   label : "OC",
		   trust_level: "tl3"
		 },
	6: { title : "Coffee", 
		   label : "CF",
		   trust_level: "tl1"
		 },
	7: { title : "Software Module", 
		   label : "SM",
		   trust_level: "tl3"
		 },
	8: { title : "Software Library", 
		   label : "SL",
		   trust_level: "tl3"
		 },
	9: { title : "Private Software App", 
		   label : "PA",
		   trust_level: "tl2"
		 }
};	

export let osc_template = {
      "id": "",
      "oscid": {
        "codebase": "massbalance-v1.0.0",
        "pac": "massbalance-v1.0.0",
        "definition": "https://github.com/trellisfw/osc-definitions"
      },
      "osc_hash": {
        "value": "cbebb6ce455ec34d361a6c544ed6b0a350fc46113e30a73178da2c8a921e3b93",
        "alg": "SHA-256"
      },
      "label": "MB",
      "title": "Organic Mass Balance",
      "date_init": "09.17.2019",
      "timestamp": "2019-08-14T02:38:32.921Z",
      "trust_level": "tl3",
       "organization": {
        "name": "Bob's Mass Balance"
      },
      "control_signals":{
				"osc_hash":     false,
        "restart":      false,
        "init_ra":      false,
        "turnoff":      false,
        "generate_pac": false,
        "private_data": "",
				"private_data_path": "",
        "token": ""
      },
      "generated_pacs": {
        "pacrandomid1": {},
        "pacrandomid2": {}
      },
      "blockchain_config": {
        "host": "string"
      }
};
