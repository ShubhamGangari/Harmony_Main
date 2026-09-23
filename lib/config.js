export const SITE_CONFIG = {
  web3FormsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "3bba933f-8ea3-4b4d-a6e7-f5543df9edb3",
  razorpayKeyId:
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    "rzp_test_TbVPnOaDITg2vm",
  
  coursesCsv:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTg1TF-gL_teSKy7B_MEbTYCpTQveWuXdDJ5TK8atmOJw-uB4r0iLKViSX-fbV1Y5tj18AcdgwPXhF/pub?gid=0&single=true&output=csv",

  productsCsv:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTg1TF-gL_teSKy7B_MEbTYCpTQveWuXdDJ5TK8atmOJw-uB4r0iLKViSX-fbV1Y5tj18AcdgwPXhF/pub?gid=594461914&single=true&output=csv",

  forms: {
    course: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLScO7mWZLMWe7n4bV85zSdqelM4laau9oDML7a28tIR92QgPsg/viewform",
      responseUrl: "https://docs.google.com/forms/d/e/1FAIpQLScO7mWZLMWe7n4bV85zSdqelM4laau9oDML7a28tIR92QgPsg/formResponse",
      submissionEnabled: true,
      fields: {
        name: "entry.578539250",
        email: "entry.1750607058",
        phone: "entry.779539709",
        course: "entry.662011609",
        background: "entry.1306981327",
        goals: "entry.194747554",
        message: "entry.1661494270"
      }
    },

    product: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdq_4nKLge1GfQUiieNa6rAYWk_xK_tz2U2T61DwofOitnYZg/viewform",
      responseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdq_4nKLge1GfQUiieNa6rAYWk_xK_tz2U2T61DwofOitnYZg/formResponse",
      submissionEnabled: true,
      fields: {
        name: "entry.1383638791",
        email: "entry.1680443799",
        phone: "entry.1882116362",
        product: "entry.568577801",
        quantity: "entry.471718757",
        message: "entry.2084013506"
      }
    },

    cart: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe1zUeVXFSHceiZHeD_Xh1EIenXkkDJCyD503C1dpvFTIp6mA/viewform",
      responseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe1zUeVXFSHceiZHeD_Xh1EIenXkkDJCyD503C1dpvFTIp6mA/formResponse",
      submissionEnabled: true,
      fields: {
        name: "entry.331108371",
        email: "entry.158750770",
        phone: "entry.1542757057",
        address: "entry.825215955",
        background: "entry.429605746",
        goals: "entry.218932701",
        message: "entry.723244769",
        cart: "entry.1519092480"
      }
    },

    consultation: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdbhat_-9gUW0A6qA7hDjy7RUMuHjnKmcIO3Rit8F5bRKp9rg/viewform",
      responseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdbhat_-9gUW0A6qA7hDjy7RUMuHjnKmcIO3Rit8F5bRKp9rg/formResponse",
      submissionEnabled: true,
      otherOptionValue: "__other_option__",
      fields: {
        name: "entry.1255688255",
        email: "entry.1018388871",
        phone: "entry.2095674326",
        preferredDate: "entry.903304794",
        preferredTime: "entry.1349280604",
        helpWith: "entry.1880152257",
        helpWithOther: "entry.1880152257.other_option_response",
        message: "entry.1167796906"
      }
    }
  }
};
