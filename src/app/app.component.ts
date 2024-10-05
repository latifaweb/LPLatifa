import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  phoneNumber: string = '0857 2927 2228'; // Nomor yang akan disalin
  copied: boolean = false; // Status tombol copy
  showPopup: boolean = false; // Status tulisan popup

  // Fungsi untuk menyalin teks ke clipboard
  copyToClipboard() {
    navigator.clipboard.writeText(this.phoneNumber).then(
      () => {
        this.copied = true; // Ubah status tombol menjadi "No Whatsapp Tersalin"
        this.showPopup = true; // Tampilkan tulisan popup

        setTimeout(() => {
          this.copied = false; // Kembalikan ke "Salin No Whatsapp" setelah 2 detik
          this.showPopup = false; // Sembunyikan popup setelah 4 detik
        }, 5000); // Sembunyikan popup setelah 4 detik
      },
      (err) => {
        console.error('Gagal menyalin teks: ', err);
      }
    );
  }
}
