<template>
  <div>
    <!-- Hidden QR code that gets generated on mount -->
    <div style="display: none;">
      <img :src="qrCodeData" ref="qrCodeImage" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';

const qrCodeData = ref('');

const generateQRCode = async () => {
  try {
    qrCodeData.value = await QRCode.toDataURL('https://aksharainstituteofmedicaltechnology.vercel.app/#/');
  } catch (err) {
    console.error('Error generating QR code:', err);
  }
};

onMounted(() => {
  generateQRCode();
});
</script>

<style>
/* No styles needed as the component is completely hidden */
</style>
