import { Injectable } from '@angular/core';

const STORAGE_KEY = 'signaturePersonalData';

export interface PersonalData {
  name: string;
  title: string;
  linkedInUrl: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Saves personal data to local storage
   */
  savePersonalData(data: PersonalData): void {
    try {
      // Check if localStorage is available
      if (typeof localStorage === 'undefined') {
        console.warn('localStorage is not available in this context');
        return;
      }
      const jsonData = JSON.stringify(data);
      localStorage.setItem(STORAGE_KEY, jsonData);
      console.log('Personal data saved to local storage:', data);
    } catch (error) {
      console.error('Failed to save personal data to local storage:', error);
      // Re-throw in development to help debug
      if (
        error instanceof DOMException &&
        error.name === 'QuotaExceededError'
      ) {
        console.error('Storage quota exceeded. Please clear some space.');
      }
    }
  }

  /**
   * Loads personal data from local storage
   */
  loadPersonalData(): PersonalData | null {
    try {
      // Check if localStorage is available
      if (typeof localStorage === 'undefined') {
        console.warn('localStorage is not available in this context');
        return null;
      }
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data) as PersonalData;
      }
    } catch (error) {
      console.error('Failed to load personal data from local storage:', error);
    }
    return null;
  }

  /**
   * Clears personal data from local storage
   */
  clearPersonalData(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear personal data from local storage:', error);
    }
  }
}
