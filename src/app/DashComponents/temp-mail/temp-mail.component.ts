import { Component, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-temp-mail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temp-mail.component.html',
})



export class TempMailComponent implements OnDestroy {





  emailName: string = '';
  duration: number = 5;
  tempMail: string = '';
  expiresAt: Date = new Date();
  emails: any[] = [];

  private pollSubscription: Subscription | null = null;

  private readonly API_BASE = 'http://localhost:8000/api/temp-mail';

  constructor(private http: HttpClient) { }




  createTempMail(): void {

    if (!this.emailName) return;

    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user = JSON.parse(userString);
    const userId = user._id;

    if (!token) return;

    const fullEmail = `${this.emailName}@tempmail.dev`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = {
      email: fullEmail,
      duration: this.duration,
      userId: userId
    };

    this.http.post<any>(`${this.API_BASE}/create`, body, { headers }).subscribe({
      next: (res) => {
        this.tempMail = res.email;
        this.expiresAt = new Date(res.expiresAt);
        this.emails = [];

        this.fetchEmails(); // Initial fetch
        this.startPolling();
      },
      error: (err) => {
        console.error('Failed to create temp mail:', err);
      }
    });
  }

  fetchEmails(): void {
    if (!this.tempMail) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any[]>(`${this.API_BASE}/inbox/${this.tempMail}`, { headers }).subscribe({
      next: (emails) => {
        this.emails = emails;
      },
      error: (err) => {
        console.error('Failed to fetch emails:', err);
      }
    });
  }

  startPolling(): void {
    this.stopPolling();
    this.pollSubscription = interval(10000).subscribe(() => {
      this.fetchEmails();
    });
  }

  stopPolling(): void {
    this.pollSubscription?.unsubscribe();
    this.pollSubscription = null;
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }
}
