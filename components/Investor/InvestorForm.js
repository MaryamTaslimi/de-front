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
    const [experience, setExperience] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);


    const submitForm = () => {

        if (name && phone) {
            setLoading(true);
            axios.post(apiRoutes.baseURL + apiRoutes.investorForm, {
                "name": name,
                "business": business,
                "experience": experience,
                "phone": phone
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                // withCredentials: true
            })
                .then(response => {
                    setLoading(false);
                    setTimeout(() => {
                        alert("اطلاعات شما با موفقیت ثبت شد!")
                        console.log(response.data);
                    }, 300);
                })
                .catch(error => {
                    setLoading(false);
                    setTimeout(() => {
                        alert("مشکلی در اطلاعات شما وجود دارد! لطفا مجددا بررسی کنید.")
                        console.log(error);
                    }, 300);
                    return false;
                })
        } else {
            alert("وارد کردن نام و شماره همراه الزامی است.")
        }
    }

    return (
        <div className = "w-full md:max-w-lg bg-shades-10 rounded-sm border-2 border-form-grey" id = {"form"}>
            <p className = {"bg-accent text-center text-shades-100 text-2xl font-light py-4 px-4 sm:px-8"}>فرم ثبت نام
                سرمایه‌گذاران</p>
            <div className = {"px-4 sm:px-8"}>
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
                            required
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


                    <div className = {"rounded-sm border border-form-grey"}>
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
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op1"
                                    id = "op1"
                                    checked = {experience === "بله، داشته‌ام."}
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
                                    className = "rounded-full accent-accent h-4 w-4 border border-form-grey checked:bg-accent hover:bg-accent focus:outline-none focus:ring-accent-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type = "radio"
                                    name = "op2"
                                    id = "op2"
                                    checked = {experience === "خیر، تجربه سرمایه گذاری در استارتاپ ندارم."}
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
                            className = {"bg-accent text-shades-100 font-light py-2 rounded-sm focus:outline-none " + (loading ? "px-8" : "px-12")}
                            type = "button"
                            onClick = {() => {
                                submitForm()
                            }}
                        >
                            <svg role = "status"
                                 className = {"w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary ml-2 " + (loading ? "inline" : "hidden")}
                                 viewBox = "0 0 100 101" fill = "none" xmlns = "http://www.w3.org/2000/svg">
                                <path
                                    d = "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill = "currentColor"/>
                                <path
                                    d = "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill = "currentFill"/>
                            </svg>
                            ثبت نام
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}