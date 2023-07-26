var DiaChi = [
    {
        ten_tp: 'Hà Nội',
        Quan_Huyen: [
            {
                ten_quan_huyen: 'Thanh Xuân',
                Phuong_Xa: ['Hạ Đình', 'Kim Giang', 'Khương Đình']
            },
            {
                ten_quan_huyen: 'Hà Đông',
                Phuong_Xa: ['Mộ Lao', 'Kiến Hưng', 'Văn Quán']
            },
            {
                ten_quan_huyen: 'Ứng Hoà',
                Phuong_Xa: ['Liên Bạt', 'Phương Tú', 'Vạn Thái']
            }
        ]

    },
    {
        ten_tp: 'Hoà Bình',
        Quan_Huyen: [
            {
                ten_quan_huyen: 'Lương Sơn',
                Phuong_Xa: ['Thanh Cao', 'Tân Thành', 'Hợp Châu']
            },
            {
                ten_quan_huyen: 'Kim Bôi',
                Phuong_Xa: ['Hợp Tiến', 'Kim Lập', 'Xuân Thuỷ']
            },
            {
                ten_quan_huyen: 'Yên Thuỷ',
                Phuong_Xa: ['Bảo Hiệu', 'Đa Phúc', 'Đoàn Kết']
            }
        ]
    },
    {
        ten_tp: 'Hà Tĩnh',
        Quan_Huyen: [
            {
                ten_quan_huyen: 'Hương Khê',
                Phuong_Xa: ['Thị trấn Hương Khê', 'Điền Mĩ', 'Gia Phố']
            },
            {
                ten_quan_huyen: 'Hương Sơn',
                Phuong_Xa: ['Sơn An', 'Sơn Bình', 'Sơn Bằng']
            },
            {
                ten_quan_huyen: 'Can Lộc',
                Phuong_Xa: ['Gia Hanh', 'Mỹ Lộc', 'Phú Lộc']
            }
        ]
    }
]

function phuong_xa() {
    var c=0;
    var namePhuong_Xa = document.getElementById('phuong-xa').value;
    if (namePhuong_Xa == "") {
        alert("Vui lòng nhập vào trường tìm kiếm");
    } else {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                for (let k = 0; k <= 2; k++) {
                    if (namePhuong_Xa == DiaChi[i].Quan_Huyen[j].Phuong_Xa[k]) {
                        var memories = DiaChi[i].Quan_Huyen[j].Phuong_Xa[k] + ' - ' + DiaChi[i].Quan_Huyen[j].ten_quan_huyen + ' - ' + DiaChi[i].ten_tp;
                        c++;
                    }
                }
            }
        }
        if (c == 0) alert("Không tìm thấy địa chỉ");
        else alert("Địa chỉ của bạn là:  " + memories);
    }
} 
