import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import {useState} from "react";


export default function MainForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [workArea, setWorkArea] = useState("");
    return (
        <div className = "w-full max-w-lg bg-shades-10 rounded-sm border-2 border-form-grey">
            <p className = {"bg-accent text-center text-shades-100 text-2xl text-light py-4 px-8"}>ثبت نام</p>
            <div className = {"px-8"}>
                <p className = {"text-shades-80 text-justify text-base text-light my-6"}>ما همراه گروه های مختلفی از بازیگران
                    صنعت در زمینه‌های مختلف همکاری و پروژه های مشترک داریم.
                    <br/>
                    برای آنکه مسیر همکاری مشترکمان هموارتر شود,میتوانید فرم زیر را پر کنید و منتظر مشاوره تخصصی و رایگان
                    تیم ما باشید!</p>
                <form>
                    <div className = "my-2 relative">
                        <PersonPinSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setName(e.target.value)
                            }
                            value = {name}
                            id = "username"
                            type = "text"
                            placeholder = "نام و نام خانوادگی"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base text-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = {" border border-form-grey"}>
                        <div
                            className = {"flex flex-row items-center justify-between rounded-sm p-2"}>
                            <p className = {"text-shades-80 text-base text-light"}>حوزه کاری</p>
                            <WorkSharpIcon
                                className = {"text-form-grey text-md"}/>
                        </div>

                        <div className = "bg-shades-20 flex flex-col gap-4 pr-8 py-6">
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op1"
                                    id = "op1"
                                    value = "سرمایه گذاری در کسب و کار های جدید"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label className = "mr-6 form-check-label inline-block text-shades-100 text-base"
                                       htmlFor = "op1">
                                    سرمایه گذاری در کسب و کار های جدید
                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op2"
                                    id = "op2"
                                    value = "به دنبال سرمایه برای راه اندازی یا نگهداشت استارتاپ یا ایده"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label className = "mr-6 form-check-label inline-block text-shades-100 text-base"
                                       htmlFor = "op2">
                                    به دنبال سرمایه برای راه اندازی یا نگهداشت استارتاپ یا ایده
                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op3"
                                    id = "op3"
                                    value = "همکاری استراتژیک و راهبردی در انجام پروژه‌ها"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label className = "mr-6 form-check-label inline-block text-shades-100 text-base"
                                       htmlFor = "op3">
                                    همکاری استراتژیک و راهبردی در انجام پروژه‌ها
                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op4"
                                    id = "op4"
                                    value = "موارد دیگر"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label className = "mr-6 form-check-label inline-block text-shades-100 text-base"
                                       htmlFor = "op4">
                                    موارد دیگر
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className = "my-2 relative">
                        <ContactPhoneSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setPhone(e.target.value)
                            }
                            value = {phone}
                            id = "phone"
                            type = "text"
                            placeholder = "شماره همراه"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base text-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = "my-2 relative">
                        <EmailSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setEmail(e.target.value)
                            }
                            value = {email}
                            id = "email"
                            type = "text"
                            placeholder = "ایمیل"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base text-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = "flex items-center justify-center my-8">
                        <button
                            className = "bg-accent text-shades-100 font-light py-2 px-12 rounded-sm focus:outline-none"
                            type = "button">
                            ثبت نام
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}