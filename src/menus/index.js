export const adminNavMenu = {

    wedding: {
        title: "Wedding",
        sub: {
            women: { title: "Women's", path: "/admin/list", sub: null },
            men: { title: "Men's", path: "/admin/list", sub: null },
            diamond: { title: "Diamonds", path: "/admin/list", sub: null }
        }
    },
    engagement: {
        title: "Engagement",
        sub: {
            women: { title: "Women's", path: "/admin/list", sub: null },
        }
    },

    watches: {
        title: "Watches",
        sub: {
            bering: {
                title: "Bering",
                path: "/admin/list",
                sub: {
                    f: { title: "Women's", sub: null },
                    m: { title: "Men's", sub: null }
                }
            },
            sekonda: {
                title: "Sekonda",
                path: "/admin/list",
                sub: {
                    f: { title: "Women's", sub: null },
                    m: { title: "Men's", sub: null }
                }
            }
        }

    },
    contemporary: {
        title: "Contemporary",
        sub: {
            bronzallure: { title: "Bronzallure", path: "/admin/list", sub: null },
            coeurdelion: { title: "Coeur De Lion", path: "/admin/list", sub: null },
            sifjakobs: { title: "SIF JAKOBS", path: "/admin/list", sub: null }
        }
    },
    gold: {
        title: "Gold",
        sub: {
            bracelets: { title: "Bracelets", path: "/admin/list", sub: null },
            earrings: { title: "Earrings", path: "/admin/list", sub: null },
            necklaces: { title: "Necklaces", path: "/admin/list", sub: null },
            rings: { title: "Rings", path: "/admin/list", sub: null },
        }
    },
    silver: {
        title: "Silver",
        sub: {
            earrings: { title: "Earrings", path: "/admin/list", sub: null },
            pendants: { title: "Pendants", path: "/admin/list", sub: null },
            bracelets: { title: "Bracelets", path: "/admin/list", sub: null },
            rings: { title: "Rings", path: "/admin/list", sub: null }
        }
    },

    signout: { title: "LOGOUT", sub: null }
}


export const mainNavMenu = {
    home: {title:"Home", sub:null},
    wedding: {
        title: "Wedding",
        sub: {
            women: { title: "Women's", sub: null },
            men: { title: "Men's", sub: null },
            diamond: { title: "Diamonds", sub: null }
        }
    },
    engagement: {
        title: "Diamond",
        sub: {
            women: { title: "Rings", sub: null },
        }
    }, 
    watches: {
        title: "Watches",
        sub: {
            bering: {
                title: "Bering",
                sub: {
                    f: { title: "Women's" },
                    m: { title: "Men's" }
                }
            },
            sekonda: {
                title: "Sekonda",
                sub: {
                    f: { title: "Women's" },
                    m: { title: "Men's" }
                }
            }
        }

    },       
    contemporary: {
        title: "Contemporary",
        sub: {
            bronzallure: { title: "Bronzallure", sub: null },
            coeurdelion: { title: "Coeur De Lion", sub: null },
            sifjakobs: { title: "SIF JAKOBS", sub: null }
        }
    },
    gold: {
        title: "Gold",
        sub: {
            necklaces: { title:  "Necklaces", sub: null },
            bracelets: { title:  "Bracelets", sub: null },
            earrings: { title:  "Earrings", sub: null },
            rings: { title:  "Rings", sub: null },
        }
    },      
    silver: {
        title: "Silver",
        sub: {
            earrings: { title: "Earrings", sub: null },
            pendants: { title: "Pendants", sub: null },
            bracelets: { title: "Bracelets", sub: null },
            rings: { title: "Rings", sub: null }
        }        
    },

    misc: {
        title: "Misc.",
        sub: {
            about: { title: "About", sub: null },
            contact: { title: "Contact", sub: null },
            signin: { title: "Sign IN", sub: null}
        }
    }
}