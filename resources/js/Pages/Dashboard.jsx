import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaBox, FaMoneyBill, FaUser } from 'react-icons/fa';

export default function Dashboard(props) {
    console.log('props', props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Selamat Datang Kembali, <strong>{props.auth.user.name}</strong></div>
                    </div>
                <div className='card'>
                    <div className="flex flex-row items-center justify-center gap-2 py-10">
                    <div className="card-body bg-yellow-500"><FaUser size={50}/></div>
                    <div className="card-body bg-blue-300"><FaBox size={50}/></div>
                    <div className="card-body bg-green-400"><FaMoneyBill size={50}/></div>
                    <div className="card-body"></div>
                    </div>
                </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
