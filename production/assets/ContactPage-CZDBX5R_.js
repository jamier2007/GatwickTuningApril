import{j as e,H as f}from"./index-D1MscZ4J.js";import{u as w,b as l}from"./vendor-CZyQNc-v.js";import{a as j}from"./index-D8rVyQy1.js";const S=()=>{const u=w(),{vehicleDetails:n,selectedServices:r,totalPrice:m}=u.state||{},[a,d]=l.useState({name:"",email:"",phone:"",vehicle:"",service:"",message:""}),[y,x]=l.useState({submitted:!1,error:!1});l.useEffect(()=>{new URLSearchParams(window.location.search).has("success")&&(x({submitted:!0,error:!1}),g(),window.history.replaceState({},document.title,window.location.pathname))},[]);const g=async()=>{try{const t="447922921110",c="4542589",s=JSON.parse(localStorage.getItem("lastFormSubmission"))||a,o=`New Booking Request:
Name: ${s.name}
Email: ${s.email}
Phone: ${s.phone}
Date: ${s.preferredDate||"Not specified"}
Time: ${s.preferredTime||"Not specified"}
Message: ${s.message?s.message.substring(0,100)+"...":"No message"}`,p=encodeURIComponent(o);await j.get(`https://api.callmebot.com/whatsapp.php?phone=${t}&text=${p}&apikey=${c}`),console.log("WhatsApp notification sent successfully"),localStorage.removeItem("lastFormSubmission")}catch(t){console.error("Error sending WhatsApp notification:",t)}};l.useEffect(()=>{if(n||r){const t=r==null?void 0:r.map(o=>{switch(o){case"stage1":return"Stage 1 Tuning";case"stage2":return"Stage 2 Tuning";case"egrDpf":return"EGR/DPF Solutions";case"adblue":return"AdBlue Delete";default:return""}}).filter(Boolean).join(", "),c=n?`
Vehicle Details:
- Make: ${n.make}
- Model: ${n.model}
- Year: ${n.year}
- Engine: ${n.engine}
- Fuel Type: ${n.fuel}`:"",s=`I would like to book the following services: ${t}.
${c}

Total Price: £${m||0}

Additional Notes:`;d(o=>({...o,message:s.trim()}))}},[n,r,m]);const i=t=>{d({...a,[t.target.name]:t.target.value})},h=async t=>{t.preventDefault();try{localStorage.setItem("lastFormSubmission",JSON.stringify(a)),t.target.submit()}catch(c){console.error("Error during form submission:",c),x({submitted:!1,error:!0})}};return e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx("title",{children:"Contact Gatwick Tuning | ECU Remapping Surrey & Sussex"}),e.jsx("meta",{name:"description",content:"Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing. Call or email us today."}),e.jsx("link",{rel:"canonical",href:"https://www.gatwicktuning.co.uk/contact"}),e.jsx("meta",{name:"keywords",content:"contact Gatwick Tuning, ECU remapping Surrey, ECU remapping Sussex, car tuning contact, performance tuning Surrey, performance tuning Sussex, vehicle tuning consultation"}),e.jsx("meta",{property:"og:title",content:"Contact Gatwick Tuning | ECU Remapping Surrey & Sussex"}),e.jsx("meta",{property:"og:description",content:"Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing."}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:"https://www.gatwicktuning.co.uk/contact"}),e.jsx("meta",{property:"og:image",content:"https://www.gatwicktuning.co.uk/og-image.jpg"}),e.jsx("meta",{property:"og:image:alt",content:"Gatwick Tuning - Professional ECU Remapping Services"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:"Contact Gatwick Tuning | ECU Remapping Surrey & Sussex"}),e.jsx("meta",{name:"twitter:description",content:"Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing."}),e.jsx("meta",{name:"twitter:image",content:"https://www.gatwicktuning.co.uk/og-image.jpg"}),e.jsx("meta",{name:"twitter:image:alt",content:"Gatwick Tuning - Professional ECU Remapping Services"}),e.jsx("script",{type:"application/ld+json",children:`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Gatwick Tuning | ECU Remapping Surrey & Sussex",
              "description": "Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing.",
              "url": "https://www.gatwicktuning.co.uk/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "Gatwick Tuning",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+44-1342-621241",
                  "contactType": "customer service",
                  "areaServed": ["Surrey", "Sussex"],
                  "availableLanguage": "English"
                }
              }
            }
          `})]}),e.jsxs("main",{className:"pt-20 min-h-screen bg-gray-50",children:[e.jsx("section",{className:"relative bg-primary","aria-labelledby":"contact-heading",children:e.jsx("div",{className:"max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"text-center",children:[e.jsxs("h1",{id:"contact-heading",className:"text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl",children:[e.jsx("span",{className:"block",children:"Contact Us"}),e.jsx("span",{className:"block text-accent",children:"Get in Touch"})]}),e.jsx("p",{className:"mt-4 text-xl text-gray-300 max-w-3xl mx-auto",children:"Ready to enhance your vehicle's performance? Contact us for a free consultation"})]})})}),e.jsx("section",{className:"py-16 bg-white","aria-labelledby":"contact-info-heading",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{id:"contact-info-heading",className:"text-3xl font-extrabold text-gray-900 sm:text-4xl",children:"Contact Information"}),e.jsx("p",{className:"mt-4 text-lg text-gray-500",children:"Get in touch with us through any of these channels"})]}),e.jsxs("div",{className:"mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Phone"}),e.jsx("p",{className:"mt-2 text-gray-500",children:e.jsx("a",{href:"tel:01342621241",className:"hover:text-accent",children:"01342 621241"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Email"}),e.jsx("p",{className:"mt-2 text-gray-500",children:e.jsx("a",{href:"mailto:info@gatwicktuning.co.uk",className:"hover:text-accent",children:"info@gatwicktuning.co.uk"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Address"}),e.jsxs("p",{className:"mt-2 text-gray-500",children:["Near Gatwick Airport",e.jsx("br",{}),"Surrey & Sussex, United Kingdom"]})]})]})]})}),e.jsx("section",{className:"py-16 bg-gray-50","aria-labelledby":"contact-form-heading",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{id:"contact-form-heading",className:"text-3xl font-extrabold text-gray-900 sm:text-4xl",children:"Send Us a Message"}),e.jsx("p",{className:"mt-4 text-lg text-gray-500",children:"Fill out the form below and we'll get back to you shortly"})]}),e.jsx("div",{className:"mt-12 max-w-lg mx-auto",children:e.jsxs("form",{onSubmit:h,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",value:a.name,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",id:"email",value:a.email,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),e.jsx("input",{type:"tel",name:"phone",id:"phone",value:a.phone,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"vehicle",className:"block text-sm font-medium text-gray-700",children:"Vehicle Details"}),e.jsx("input",{type:"text",name:"vehicle",id:"vehicle",value:a.vehicle,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",placeholder:"Make, Model, Year",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700",children:"Service Required"}),e.jsxs("select",{name:"service",id:"service",value:a.service,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",required:!0,children:[e.jsx("option",{value:"",children:"Select a service"}),e.jsx("option",{value:"stage1",children:"Stage 1 Tuning"}),e.jsx("option",{value:"stage2",children:"Stage 2 Tuning"}),e.jsx("option",{value:"dpf",children:"DPF Solutions"}),e.jsx("option",{value:"egr",children:"EGR Solutions"}),e.jsx("option",{value:"adblue",children:"AdBlue Solutions"}),e.jsx("option",{value:"other",children:"Other"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),e.jsx("textarea",{name:"message",id:"message",rows:4,value:a.message,onChange:i,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent",required:!0})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",children:"Send Message"})})]})})]})}),e.jsx("section",{className:"py-16 bg-white","aria-labelledby":"location-heading",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{id:"location-heading",className:"text-3xl font-extrabold text-gray-900 sm:text-4xl",children:"Our Location"}),e.jsx("p",{className:"mt-4 text-lg text-gray-500",children:"Conveniently located near Gatwick Airport, serving Surrey & Sussex"})]}),e.jsx("div",{className:"mt-12",children:e.jsx("div",{className:"aspect-w-16 aspect-h-9",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d-0.1615!3d51.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA5JzEzLjMiTiAwwrAwOSc0MS40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Gatwick Tuning Location"})})})]})})]})]})};export{S as default};
//# sourceMappingURL=ContactPage-CZDBX5R_.js.map
