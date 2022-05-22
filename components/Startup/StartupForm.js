import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

import {apiRoutes} from "../../utils/const";
import axios from "axios";
import {useState} from "react";


export default function StartupForm() {
    const [name, setName] = useState("");
    const [startup, setStartup] = useState("");
    const [workArea, setWorkArea] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [phone, setPhone] = useState("");


    const submitForm = () => {


        if (name && phone) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("startup", startup);
            formData.append("workArea", workArea);
            formData.append("phone", phone);
            formData.append("doc", selectedFile);
            axios.post(apiRoutes.baseURL + apiRoutes.startupForm, formData, {
                "Content-Type": "multipart/form-data"
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
        <div className = "w-full max-w-lg bg-shades-10 rounded-sm border-2 border-form-grey" id = {"form"}>
            <p className = {"bg-accent text-center text-shades-100 text-2xl font-light py-4 px-4 sm:px-8"}>فرم ثبت نام
                سرمایه‌پذیر</p>
            <div className = {"px-4 sm:px-8"}>
                <p className = {"text-shades-80 text-justify text-base font-light my-6"}>برای آنکه مسیر همکاری مشترکمان
                    هموارتر شود، میتوانید فرم زیر را پر کنید و منتظر مشاوره تخصصی و رایگان تیم ما باشید!
                </p>
                <form encType = "multipart/form-data">
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
                        <VerifiedSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setStartup(e.target.value)
                            }
                            value = {startup}
                            id = "startup"
                            type = "text"
                            placeholder = "نام ایده یا استارتاپ"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = "my-2 relative">
                        <WorkSharpIcon
                            className = {"absolute left-2 top-2.5 text-form-grey text-md"}/>
                        <input
                            onChange = {(e) =>
                                setWorkArea(e.target.value)
                            }
                            value = {workArea}
                            id = "workArea"
                            type = "text"
                            placeholder = "حوزه فعالیت استارتاپ"
                            className = "appearance-none border border-form-grey rounded-sm w-full p-2 text-base font-light placeholder-shades-80 focus:border-primary focus:placeholder-transparent"
                        />
                    </div>

                    <div className = {"rounded-sm border border-form-grey"}>
                        <div className = {"flex flex-row items-center justify-between rounded-sm p-2"}>
                            <p className = {"text-shades-80 text-base font-light"}>لطفا مدارک یا اطلاعات مربوط به پروژه
                                را بارگذاری کنید.</p>
                            <FileUploadSharpIcon
                                className = {"text-form-grey text-md"}/>
                        </div>

                        <div className = "mt-1 flex flex-col gap-4 justify-center items-center py-6 bg-shades-20">

                            <AssignmentSharpIcon className = {"text-form-grey text-md"}
                                                 sx = {{fontSize: 50}}/>
                            <div className = "flex flex-row justify-between items-center gap-4">
                                <label
                                    htmlFor = "doc"
                                    className = "cursor-pointer font-light text-base text-shades-100 px-2 py-1 rounded-sm bg-shades-40 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent-50"
                                >
                                    <span>انتخاب فایل</span>
                                    <input id = "doc" name = "doc" type = "file"
                                           className = "sr-only"
                                           onChange = {(e) => {
                                               setSelectedFile(e.target.files[0]);
                                           }
                                           }
                                    />
                                </label>
                                <p className = "text-xs text-shades-80">{selectedFile ? selectedFile.name : "فایلی انتخاب نشده"}</p>

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
                            className = "bg-accent text-sm md:text-lg text-shades-100 font-light py-2 px-12 rounded-sm focus:outline-none"
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


