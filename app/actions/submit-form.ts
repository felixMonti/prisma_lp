"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return { success: false, error: "Configuration error" }
  }

  const payload = {
    access_key: accessKey,
    name,
    email,
    message,
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (data.success) {
      return { success: true }
    } else {
      return { success: false, error: "Submission failed" }
    }
  } catch (error) {
    return { success: false, error: "Network error" }
  }
}
