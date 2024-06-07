

const ContactPage = () => {
    return (
        <main>
            <div className="bg-black">
                <div className="pt-10 px-20 text-white">
                    <h1 className="font-bold text-xl font-Inter">SEND US A MESSAGE. </h1>
                    <div className="font-normal text-sm pt-6 font-Inter">For more information, email <span className="underline font-bold">uridiumdelightandbeverages@gmail.com</span> or fill out the form below.</div>
                </div>

                <div className="mx-auto w-fit">
                    
                    <div className="flex gap-5 justify-center pt-20">
                        <div class="mb-5">
                            <label for="NAME" className="block mb-2 text-base font-medium text-white dark:text-white font-Inter">NAME</label>
                            <input type="NAME" id="NAME" class="shadow-sm w-[592px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div class="mb-5">
                            <label for="SUBJECT" class="block mb-2 text-base font-medium text-white dark:text-white font-Inter">SUBJECT</label>
                            <input type="SUBJECT" id="SUBJECT" class="shadow-sm w-[592px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                    </div>

                    <div className="flex gap-5 justify-center">
                        <div>
                            <div class="mb-5 pt-3">
                                <label for="COMPANY" class="block mb-2 text-base font-medium text-white dark:text-white font-Inter">COMPANY</label>
                                <input type="COMPANY" id="COMPANY" class="shadow-sm w-[592px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                            </div>     
                            <div class="mb-5 pt-3">
                                <label for="E-MAIL" class="block mb-2 text-base font-medium text-white dark:text-white font-Inter">E-MAIL</label>
                                <input type="E-MAIL" id="E-MAIL" class="shadow-sm w-[592px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                            </div>     
                            <div class="mb-5 pt-3">
                                <label for="LOCATION" class="block mb-2 text-base font-medium text-white dark:text-white font-Inter">LOCATION</label>
                                <input type="LOCATION" id="LOCATION" class="shadow-sm w-[592px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
                            </div>     
                        </div>

                        <div class="mb-5">
                            <label for="MESSAGE" class="block mb-2 text-base font-medium text-white dark:text-white font-Inter">MESSAGE</label>
                            <textarea type="MESSAGE" rows="4" id="MESSAGE" class="shadow-sm w-[592px] h-[267px] bg-[#dad7d3] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Leave a comment..." required />
                        </div>
                    </div>
                    <div className="pt-9 pb-48 flex justify-end">
                        <button type="button" className="text-black font-Inter space-y-6 w-[119px] h-[40px] bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-black rounded-sm text-base font-normal px-2 py-0.5 text-center dark:bg-slate-200 dark:hover:bg-slate-400 dark:focus:ring-slate-50">SEND</button>
                    </div>
                </div>
                
            </div>
        </main>
    )
};

export default ContactPage;