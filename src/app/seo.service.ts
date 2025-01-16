import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setOGTitle(title: string) {
    this.meta.updateTag({ property: 'og:title', content: title });
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  setKeywords(keywords: string[]) {
    this.meta.updateTag({ name: 'keywords', content: keywords.join(',') });
  }

}