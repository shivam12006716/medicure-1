import Image from 'next/image'
import profilePicture from './cv.png'
import Link from 'next/link'
export default function FullScreenProfile() {
    return (
        <div className="min-h-screen bg-slate-200 text-slate-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                            src={profilePicture}
                            alt="Profile Picture"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">SANDEEP PANDEY</h2>
                        <p className="text-sm text-slate-500">12205296</p>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-sm">
                        <span className="font-semibold">Hostel Name:</span> BH -2
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Room Number:</span> 23
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Mobile Number:</span> 1234567890
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Order History</h3>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded-lg w-full">
                        Track Order/Appointment
                    </button>
                   <Link href="\home"> <button className="bg-sky-500 text-white mt-4 px-4 py-2 rounded-full w-full">
                       Go to Home
                    </button>
                    </Link>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <p className="text-sm">
                        If you need any assistance, please contact our support team.
                    </p>
                </div>
            </div>
        </div>
    )
}