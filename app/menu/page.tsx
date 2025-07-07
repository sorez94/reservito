import React from "react";
import MenuPage from "@/app/menu/menu-component/MenuPage";
import {fetchFoods} from "@/app/menu/data/foodsData";

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
    await delay(20000)
    const foods = [
        {
            id: 1,
            name: "چلوخورشت قیمه بادمجان",
            price: 170000,
            stars: 3.5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/gheime.png"
        },
        {
            id: 2,
            name: "چلوخورشت قرمه سبزی",
            price: 190000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/ghorme.png"
        },
        {
            id: 3,
            name: "عدس پلو با گوشت چرخ کرده",
            price: 170000,
            stars: 2,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/adas-polo.png"
        },
        {
            id: 4,
            name: "لوبیاپلو با گوشت گوسفندی",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [],
            image: "/images/loubia-polo.png"
        },
        {
            id: 5,
            name: "جوجه کباب",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/joje-kabab.png"
        },
        {
            id: 6,
            name: "ماکارانی با گوشت چرخ کرده",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/macaroni.png"
        },
        {
            id: 7,
            name: "اکبر جوجه",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/akbar-joje.png"
        },
        {
            id: 8,
            name: "کتلت پلو",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/kotlet-polo.png"
        },
        {
            id: 9,
            name: "اولویه",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/olvie.png"
        },
        {
            id: 10,
            name: "زرشک پلو با مرغ",
            price: 170000,
            stars: 5,
            size: "تک نفره",
            comments: [
                {
                    id: 1,
                    userName: "Mobina Ghafari",
                    persianName: "مبینا غفاری",
                    comment: "عطر و طعم غذا عالی بود و خیلی سریع به دستم رسید. مرسی از کیفیت و مشتری مداری تون",
                    date: "01/11/2025"
                },
                {
                    id: 2,
                    userName: "Amirali Mohebi",
                    persianName: "امیرعلی محبی",
                    comment: "مثل همیشه کیفیت بالا و تازه و خوشمزه واقعا عالی هستین شما",
                    date: "01/11/2025"
                },
                {
                    id: 3,
                    userName: "Zahra Amini",
                    persianName: "زهرا امینی",
                    comment: "واقعا خوشمزه و تازه بود همه چی عالی باعث شد دفعات بعد هم سفارش بدم",
                    date: "01/11/2025"
                }
            ],
            image: "/images/zereshk-polo-morgh.png"
        }
    ];
    return <MenuPage foods={foods}/>
}
