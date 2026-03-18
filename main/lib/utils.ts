import emailjs from "@emailjs/browser"

export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

export const sendFormData = (e: any) => {
    e.preventDefault()
    const formData = e.target;
    const name = formData.elements["name"]?.value || "";
    const email = formData.elements["email"]?.value || "";
    const subject = formData.elements["subject"]?.value || "";
    const message = formData.elements["message"]?.value || "";

    try {
        emailjs.send(
            process.env.EMAILJS_SERVICE_ID || "",
            process.env.EMAILJS_TEMPLATE_ID || "",
            { name, email, subject, message },
            process.env.EMAILJS_PUBLIC_KEY || ""
        )
        alert("Message sent successfully")
    } catch (error) {
        console.error(error)
        alert("Message failed to send")
    }
}