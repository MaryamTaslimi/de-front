import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import {apiRoutes} from "../../utils/const";
import axios from "axios";
import {useState} from "react";


export default function InvestorForm() {
    const [name, setName] = useState("");
    const [business, setBusiness] = useState("");
    const [phone, setPhone] = useState("");
    const [experience, setExperience] = useState("");

    const submitForm = () => {
        axios.post(apiRoutes.baseURL + apiRoutes.investorForm, {
            "name": name,
            "business": business,
            "phone": phone,
            "experience": experience
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
                return false;
            })
    }

    return (
        <div className = "w-full max-w-lg bg-shades-10 rounded-sm border-2 border-form-grey" id = {"form"}>
            <p className = {"bg-accent text-center text-shades-100 text-2xl font-light py-4 px-8"}>فرم ثبت نام سرمایه‌گذاران</p>
            <div className = {"px-8"}>
                <p className = {"text-shades-80 text-justify text-base font-light my-6"}>برای آنکه مسیر همکاری مشترکمان
                    هموارتر شود، میتوانید فرم زیر را پر کنید و منتظر مشاوره تخصصی و رایگان تیم ما باشید!
                </p>
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
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = "my-2 relative">
                        <WorkSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setBusiness(e.target.value)
                            }
                            value = {business}
                            id = "business"
                            type = "text"
                            placeholder = "نام کسب و کار"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>


                    <div className = {" border border-form-grey"}>
                        <div
                            className = {"flex flex-row items-center justify-between rounded-sm p-2"}>
                            <p className = {"text-shades-80 text-base font-light"}>آیا تا به حال تجربه سرمایه‌گذاری در
                                استارتاپ ها را داشته‌اید؟</p>
                            <PaidSharpIcon
                                className = {"text-form-grey text-md"}/>
                        </div>

                        <div className = "bg-shades-20 flex flex-col gap-4 pr-8 py-6">
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op1"
                                    id = "op1"
                                    value = "بله، داشته‌ام."
                                    onChange = {(e) =>
                                        setExperience(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light text-base"
                                    htmlFor = "op1">
                                    بله، داشته‌ام. </label>
                            </div>
                            <div className = "flex flex-row">
                                <input
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op2"
                                    id = "op2"
                                    value = "خیر، تجربه سرمایه گذاری در استارتاپ ندارم."
                                    onChange = {(e) =>
                                        setExperience(e.target.value)
                                    }
                                />
                                <label
                                    className = "mr-6 form-check-label inline-block text-shades-100 font-light text-base"
                                    htmlFor = "op2">
                                    خیر، تجربه سرمایه گذاری در استارتاپ ندارم. </label>
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