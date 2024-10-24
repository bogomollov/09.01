<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
</script>

<template>
    <HeaderLayout />
    <div class="bg-gray py-[40px] mb-[50px]">
        <div class="flex flex-col justify-between gap-[20px] max-w-[1520px] p-[30px] rounded-[10px] bg-white">
            <h5 class="flex items-start">Товары со скидкой</h5>
            <div class="flex justify-between items-center">
                <div class="flex gap-[15px] h-[160px]">
                    <img src="../assets/ryzen5_5600.webp">
                    <div class="flex flex-col items-start justify-center">
                        <h6>AMD Ryzen 5 7500F</h6>
                        <div class="flex items-center gap-[15px]">
                            <p>15 999 ₽</p>
                            <small class="sale-price">16 299 ₽</small>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[15px] h-[160px]">
                    <img src="../assets/i3_12100.webp">
                    <div class="flex flex-col items-start justify-center">
                        <h6>Intel Core i3 12100</h6>
                        <div class="flex items-center gap-[15px]">
                            <p>10 999 ₽</p>
                            <small class="sale-price">11 599 ₽</small>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[15px] h-[160px]">
                    <img src="../assets/gtx1650.webp">
                    <div class="flex flex-col items-start justify-center">
                        <h6>MSI GeForce GTX 1650</h6>
                        <div class="flex items-center gap-[15px]">
                            <p>15 999 ₽</p>
                            <small class="sale-price">16 299 ₽</small>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[15px] h-[160px]">
                    <img src="../assets/patriot_viper_steel.webp">
                    <div class="flex flex-col items-start justify-center">
                        <h6>Patriot Viper Steel</h6>
                        <div class="flex items-center gap-[15px]">
                            <p>4 099 ₽</p>
                            <small class="sale-price">4 699 ₽</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-between gap-[20px] mx-[200px] mb-[50px]">
        <h5>Популярные бренды</h5>
        <div class="flex justify-between items-center">
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[45px] bg-gray">
                <img src="../assets/msi.webp">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/gigabyte.webp">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/asrock.webp">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/kingston.webp">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/asus.svg">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/intel.webp">
            </div>
            <div class="flex items-center justify-center w-[200px] h-[90px] rounded-[10px] p-[32px] bg-gray">
                <img src="../assets/amd.webp">
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-between gap-[20px] mx-[200px] mb-[50px]">
        <h5>Хиты продаж</h5>
        <div class="flex justify-between items-center">
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/msi_B760.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>MSI B760 GAMING</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>12 999 ₽</p>
                        <small class="sale-price">14 299 ₽</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/msi_B650-S_WIFI.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>MSI PRO B650-S WIFI</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>17 999 ₽</p>
                        <small class="sale-price">18 199 ₽</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/gigabyte_B760M_DS3H.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>GIGABYTE B760M DS3H</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>11 999 ₽</p>
                        <small class="sale-price">13 399 ₽</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/msi_PRO_Z790-P_WIFI.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>MSI PRO Z790-P WIFI</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>20 999 ₽</p>
                        <small class="sale-price">22 099 ₽</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/asrock_B650M_Pro_RS.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>ASRock B650M Pro RS</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>15 999 ₽</p>
                        <small class="sale-price">17 499 ₽</small>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-[15px]">
                <img class="w-[206px] h-[248px]" src="../assets/asrock_B550M_Phantom_Gaming.webp">
                <div class="flex flex-col items-start justify-center">
                    <h6>ASRock B550M</h6>
                    <div class="flex items-center gap-[12px]">
                        <p>10 999 ₽</p>
                        <small class="sale-price">12 399 ₽</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>