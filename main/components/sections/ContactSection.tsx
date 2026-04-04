"use client"

import Button from "../ui/Button";
import { sendFormData } from "@/lib/utils";

export default function ContactSection() {
    return (
        <form
            className="flex flex-col gap-4 text-dark w-full max-w-4xl mx-auto"
            onSubmit={sendFormData}
        >
            <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                    <label className="text-lg md:text-xl ml-2">
                        First Name <span className="text-red-500/50">*</span>
                    </label>
                    <input
                        required
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder="John"
                        className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                    <label className="text-lg md:text-xl ml-2">
                        Last Name <span className="text-red-500/50">*</span>
                    </label>
                    <input
                        required
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder="Doe"
                        className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                <label className="text-lg md:text-xl ml-2">
                    Email <span className="text-red-500/50">*</span>
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                <label className="text-lg md:text-xl ml-2">
                    Message <span className="text-red-500/50">*</span>
                </label>
                <textarea
                    required
                    minLength={10}
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="bg-secondary-mid/15 min-h-40 p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                />
            </div>
            <Button size="md" color="secondaryMid" type="submit" roundSize="sm">
                Send message
            </Button>
        </form>
    )
}
