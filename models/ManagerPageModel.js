

const mongoose = require("mongoose");
const apiFormatActivite = require("../utils/FormatApi");




const ManagerPageSchema = new mongoose.Schema(
    {
        test: {
            type: String, required: false, default: `${apiFormatActivite.test}`
        },
        accueil: {

            // Activité n°1
            activite1: {
                video: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite1.video}`
                },
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite1.coverPicture}`
                },
                title: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite1.title}`
                },
                description: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite1.description}`
                }
            },
            // ACtivité n°2
            activite2: {
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite2.coverPicture}`
                },
                title: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite2.title}`
                },
                verset: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite2.verset}`
                },
                description1: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite2.description1}`
                },
                description2: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite2.description2}`
                }
            }
            ,
            // ACtivité n°2
            activite3: {
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite3.coverPicture}`
                },
                title: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite3.title}`
                },
                description: {
                    type: String, required: false, default: `${apiFormatActivite.accueil.activite3.description}`
                }
            }
        },
        about: {
            // Video d'introduction
            activite1: {
                video: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.video}`
                },
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.coverPicture}`
                },
                title: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.title}`
                },
                description: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.description}`
                },
                strategy: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.strategy}`
                },
                content: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite1.content}`
                },
            },
            // Activté n°2
            activite2: {
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite2.coverPicture}`
                },
                title: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite2.title}`
                },
                description: {
                    type: String, required: false, default: `${apiFormatActivite.about.activite2.description}`
                },
            }
        },
        contact: {
            // Video d'introduction
            activite1: {
                logo: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite1.logo}`
                },
                name: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite1.name}`
                },
                coverPicture: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite1.coverPicture}`
                }
            },
            activite2: {
                email: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite2.email}`
                },
                telephone1: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite2.telephone1}`
                },
                telephone2: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite2.telephone2}`
                },
                telephone3: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite2.telephone3}`
                },
            },
            activite3: {
                facebook: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite3.facebook}`
                },
                youtube: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite3.youtube}`
                },
                instagram: {
                    type: String, required: false, default: `${apiFormatActivite.contact.activite3.instagram}`
                },
            }
        }
    },
    { timestamps: true }
)

const ManagerPage = mongoose.model("managerpage", ManagerPageSchema);

module.exports = ManagerPage ; 