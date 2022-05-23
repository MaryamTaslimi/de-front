import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import {useState} from "react";
import {apiRoutes} from "../../utils/const";
import axios from "axios";


export default function MainForm() {
    const [name, setName] = useState("");
    const [workArea, setWorkArea] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = () => {

        if (name && phone) {
            axios.post(apiRoutes.baseURL + apiRoutes.mainForm, {
                "name": name,
                "workArea": workArea,
                "phone": phone,
                "email": email
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            })
                .then(response => {
                    alert("اطلاعات شما با موفقیت ثبت شد!")
                    console.log(response.data);
                })
                .catch(error => {
                    alert("مشکلی در اطلاعات شما وجود دارد! لطفا مجددا بررسی کنید.")
                    console.log(error);
                    return false;
                })
        } else {
            alert("وارد کردن نام و شماره همراه الزامی است.")
        }

    }

    return (
        <div className = "w-full lg:max-w-lg -mt-4 md:mt-0 bg-shades-10 rounded-sm border-2 border-form-grey ">
            <p className = {"bg-accent text-center text-shades-100 text-2xl font-light py-4 px-4 sm:px-8"}>ثبت نام</p>
            <div className = {"px-4 sm:px-8"}>
                <p className = {"text-shades-80 text-justify text-base font-light my-6"}>ما همراه گروه های مختلفی از
                    بازیگران
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
                            id = "name"
                            type = "text"
                            placeholder = "نام و نام خانوادگی"
                            required
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = {"rounded-sm border border-form-grey"}>
                        <div
                            className = {"flex flex-row items-center justify-between rounded-sm p-2"}>
                            <p className = {"text-shades-80 text-base font-light"}>حوزه کاری</p>
                            <WorkSharpIcon
                                className = {"text-form-grey text-md"}/>
                        </div>

                        <div className = "bg-shades-20 flex flex-col gap-4 px-2 md:pr-8 py-6">
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op1"
                                    id = "op1"
                                    checked = {workArea === "سرمایه گذاری در کسب و کار های جدید"}
                                    value = "سرمایه گذاری در کسب و کار های جدید"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light text-base"
                                    htmlFor = "op1">
                                    سرمایه گذاری در کسب و کار های جدید
                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op2"
                                    id = "op2"
                                    checked = {workArea === "دنبال سرمایه برای توسعه استارتاپ"}
                                    value = "دنبال سرمایه برای توسعه استارتاپ"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light text-base"
                                    htmlFor = "op2">
                                    دنبال سرمایه برای توسعه استارتاپ
                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op3"
                                    id = "op3"
                                    checked = {workArea === "همکاری استراتژیک و راهبردی در توسعه کسب و کار"}
                                    value = "همکاری استراتژیک و راهبردی در توسعه کسب و کار"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light text-base"
                                    htmlFor = "op3">
                                    همکاری استراتژیک و راهبردی در توسعه کسب و کار

                                </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op4"
                                    id = "op4"
                                    checked = {workArea === "موارد دیگر"}
                                    value = "موارد دیگر"
                                    onChange = {(e) =>
                                        setWorkArea(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light  text-base"
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
                            type = "tel"
                            placeholder = "شماره همراه"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
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
                            type = "email"
                            placeholder = "ایمیل"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = "flex items-center justify-center my-8">
                        <button
                            className = "bg-accent text-shades-100 font-light py-2 px-12 rounded-sm focus:outline-none"
                            type = "button"
                            onClick = {() => {
                                submitForm()
                            }}
                        >
                            ثبت نام
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}