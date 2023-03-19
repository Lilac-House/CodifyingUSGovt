enum GOVERNMENT_BRANCH {
    JUDICIAL,
    LEGISLATIVE,
    EXECUTIVE
}

enum EXECUTIVE_POSITION {
    GOVERNOR,
    LIEUTANT_GOVERNOR,
    ATTORNEY_GENERAL,
    STATE_AUDITOR,
    SECRETARY_OF_STATE,
    STATE_TREASURER,
    SUPERINTENDENT_OF_EDUCATION,
    COMISSIONER_OF_AGRICULTURE_AND_INDUSTRIES,
    CHIEF_OF_STAFF,
    COMMUNICATIONS_DIRECTOR,
    DIRECTOR_OF_POLICY,
    ADMINISTRATOR_OF_THE_ALCOHOLIC_BEVERAGE_CONTROL_BOARD,
    SUPERINTENDENT_OF_STATE_BANKING_DEPARTMENT,
    SECRETARY_OF_THE_ALABAMA_DEPARTMENT_OF_EARLY_CHILDHOOD_EDUCATION,
    SECRETARY_OF_COMMERCE,

}

enum OFFICIAL_DUTIES {
    CIC, //commander in chief
    SOS, //state of state address
    APPOINT,
}

enum ATTAINMENT {
    ELECTED,
    APPOINTED,
    CHOSEN
}

enum LEGISLATIVE_STYLE {
    BICAMERAL,
    UNICAMERAL
}

enum LEGISLATIVE_CHAMBER {
    UPPER,
    LOWER
}

export const stateGovernments = [
    {
        stateName: "Alabama",
        short_code: "AL",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInformation: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 34
                }, {
                    name: 'House of Representatives',
                    member_count: 105
                }]
            }
        }
    },
    {
        stateName: "Alaska",
        short_code: "AK",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 20
                }, {
                    name: 'House of Representatives',
                    member_count: 40
                }]
            }
        }
    },
    {
        stateName: "Arizona",
        short_code: "AZ",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 30
                }, {
                    name: 'House of Representatives',
                    member_count: 60
                }]
            }
        }
    },
    {
        short_code: "AR",
        stateName: "Arkansas",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 35
                }, {
                    name: 'House of Representatives',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "California",
        short_code: "CA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'Assembly',
                    member_count: 80
                }]
            }
        }
    },
    {
        stateName: "Colorado",
        short_code: "CO",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 35
                }, {
                    name: 'House of Representatives',
                    member_count: 65
                }]
            }
        }
    },
    {
        stateName: "Connecticut",
        short_code: "CT",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 36
                }, {
                    name: 'House of Representatives',
                    member_count: 151
                }]
            }
        }
    },
    {
        stateName: "Delaware",
        short_code: "DE",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 21
                }, {
                    name: 'House of Representatives',
                    member_count: 41
                }]
            }
        }
    },
    {
        stateName: "Florida",
        short_code: "FL",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'House of Representatives',
                    member_count: 120
                }]
            }
        }
    },
    {
        stateName: "Georgia",
        short_code: "GA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 56
                }, {
                    name: 'House of Representatives',
                    member_count: 180
                }]
            }
        }
    },
    {
        stateName: "Hawaii",
        short_code: "HI",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 25
                }, {
                    name: 'House of Representatives',
                    member_count: 51
                }]
            }
        }
    },
    {
        stateName: "Idaho",
        short_code: "ID",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 35
                }, {
                    name: 'House of Representatives',
                    member_count: 70
                }]
            }
        }
    },
    {
        stateName: "Illinois",
        short_code: "IL",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 50
                }, {
                    name: 'House of Representatives',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Indiana",
        short_code: "IN",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 39
                }, {
                    name: 'House of Representatives',
                    member_count: 39
                }]
            }
        }
    },
    {
        stateName: "Iowa",
        short_code: "IA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 50
                }, {
                    name: 'House of Representatives',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Kansas",
        short_code: "KS",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'House of Representatives',
                    member_count: 125
                }]
            }
        }
    },
    {
        stateName: "Kentucky",
        short_code: "KY",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 38
                }, {
                    name: 'House of Representatives',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Louisiana",
        short_code: "LA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 39
                }, {
                    name: 'House of Representatives',
                    member_count: 105
                }]
            }
        }
    },
    {
        stateName: "Maine",
        short_code: "ME",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 35
                }, {
                    name: 'House of Representatives',
                    member_count: 151
                }]
            }
        }
    },
    {
        stateName: "Maryland",
        short_code: "MD",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 47
                }, {
                    name: 'House of Delegates',
                    member_count: 141
                }]
            }
        }
    },
    {
        stateName: "Massachusetts",
        short_code: "MA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'House of Representatives',
                    member_count: 160
                }]
            }
        }
    },
    {
        stateName: "Michigan",
        short_code: "MI",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 38
                }, {
                    name: 'House of Representatives',
                    member_count: 110
                }]
            }
        }
    },
    {
        stateName: "Minnesota",
        short_code: "MN",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 67
                }, {
                    name: 'House of Representatives',
                    member_count: 134
                }]
            }
        }
    },
    {
        stateName: "Mississippi",
        short_code: "MS",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 52
                }, {
                    name: 'House of Representatives',
                    member_count: 122
                }]
            }
        }
    },
    {
        stateName: "Missouri",
        short_code: "MO",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 34
                }, {
                    name: 'House of Representatives',
                    member_count: 163
                }]
            }
        }
    },
    {
        stateName: "Montana",
        short_code: "MT",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 50
                }, {
                    name: 'House of Representatives',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Nebraska",
        short_code: "NE",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.UNICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 49
                }]
            }
        }
    },
    {
        stateName: "Nevada",
        short_code: "NV",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 21
                }, {
                    name: 'Assembly',
                    member_count: 42
                }]
            }
        }
    },
    {
        stateName: "New Hampshire",
        short_code: "NH",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 24
                }, {
                    name: 'House of Representatives',
                    member_count: 400
                }]
            }
        }
    },
    {
        stateName: "New Jersey",
        short_code: "NJ",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'General Assembly',
                    member_count: 80
                }]
            }
        }
    },
    {
        stateName: "New Mexico",
        short_code: "NM",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 42
                }, {
                    name: 'House of Representatives',
                    member_count: 70
                }]
            }
        }
    },
    {
        stateName: "New York",
        short_code: "NY",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 63
                }, {
                    name: 'Assembly',
                    member_count: 150
                }]
            }
        }
    },
    {
        stateName: "North Carolina",
        short_code: "NC",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 50
                }, {
                    name: 'House of Representatives',
                    member_count: 120
                }]
            }
        }
    },
    {
        stateName: "North Dakota",
        short_code: "ND",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 47
                }, {
                    name: 'House of Representatives',
                    member_count: 94
                }]
            }
        }
    },
    {
        stateName: "Ohio",
        short_code: "OH",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 33
                }, {
                    name: 'House of Representatives',
                    member_count: 99
                }]
            }
        }
    },
    {
        stateName: "Oklahoma",
        short_code: "OK",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 48
                }, {
                    name: 'House of Representatives',
                    member_count: 101
                }]
            }
        }
    },
    {
        stateName: "Oregon",
        short_code: "OR",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 30
                }, {
                    name: 'House of Representatives',
                    member_count: 60
                }]
            }
        }
    },
    {
        stateName: "Pennsylvania",
        short_code: "PA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 50
                }, {
                    name: 'House of Representatives',
                    member_count: 203
                }]
            }
        }
    },
    {
        stateName: "Rhode Island",
        short_code: "RI",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 38
                }, {
                    name: 'House of Representatives',
                    member_count: 75
                }]
            }
        }
    },
    {
        stateName: "South Carolina",
        short_code: "SC",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 46
                }, {
                    name: 'House of Representatives',
                    member_count: 124
                }]
            }
        }
    },
    {
        stateName: "South Dakota",
        short_code: "SD",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 35
                }, {
                    name: 'House of Representatives',
                    member_count: 70
                }]
            }
        }
    },
    {
        stateName: "Tennessee",
        short_code: "TN",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 33
                }, {
                    name: 'House of Representatives',
                    member_count: 99
                }]
            }
        }
    },
    {
        stateName: "Texas",
        short_code: "TX",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 31
                }, {
                    name: 'House of Representatives',
                    member_count: 150
                }]
            }
        }
    },
    {
        stateName: "Utah",
        short_code: "UT",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 29
                }, {
                    name: 'House of Representatives',
                    member_count: 75
                }]
            }
        }
    },
    {
        stateName: "Vermont",
        short_code: "VT",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 30
                }, {
                    name: 'House of Representatives',
                    member_count: 150
                }]
            }
        }
    },
    {
        stateName: "Virginia",
        short_code: "VA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 40
                }, {
                    name: 'House of Delegates',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Washington",
        short_code: "WA",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 49
                }, {
                    name: 'House of Representatives',
                    member_count: 98
                }]
            }
        }
    },
    {
        stateName: "West Virginia",
        short_code: "WV",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 34
                }, {
                    name: 'House of Delegates',
                    member_count: 100
                }]
            }
        }
    },
    {
        stateName: "Wisconsin",
        short_code: "WI",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 33
                }, {
                    name: 'Assembly',
                    member_count: 99
                }]
            }
        }
    },
    {
        stateName: "Wyoming",
        short_code: "WY",
        branches: [GOVERNMENT_BRANCH.EXECUTIVE, GOVERNMENT_BRANCH.JUDICIAL, GOVERNMENT_BRANCH.LEGISLATIVE],
        branchInfo: {
            [GOVERNMENT_BRANCH.LEGISLATIVE]: {
                type: LEGISLATIVE_STYLE.BICAMERAL,
                chambers: [{
                    name: 'Senate',
                    member_count: 30
                }, {
                    name: 'House of Representatives',
                    member_count: 60
                }]
            }
        }
    },
]