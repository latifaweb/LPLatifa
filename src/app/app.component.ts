import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  phoneNumber: string = '085729272228'; // Nomor yang akan disalin
  copied: boolean = false; // Status tombol copy

  // Fungsi untuk menyalin teks ke clipboard
  copyToClipboard() {
    navigator.clipboard.writeText(this.phoneNumber).then(
      () => {
        this.copied = true; // Ubah status tombol menjadi Copied
        setTimeout(() => {
          this.copied = false; // Kembalikan ke "Copy" setelah 2 detik
        }, 2000);
      },
      (err) => {
        console.error('Gagal menyalin teks: ', err);
      }
    );
  }
}
