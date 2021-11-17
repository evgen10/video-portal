import { Injectable } from "@angular/core";
import { ICource } from "src/app/core/models/cource";

@Injectable({
  providedIn: 'root'})
export class CourceService {

  public videoCources: Array<ICource> = [
    {
      id: 1,
      title: 'Social Media Success: Video Storytelling on YouTube & Beyond',
      creationDate: new Date(2022, 3, 25),
      duration: 55,
      description: "Videos go viral for a reason: because they capture a truth or tell a story that resonates with viewers. Whether silly or sincere, an authentic story makes you feel seen, feel good, and feel like part of a community. Storytelling is also the engine that’s powered Lilly Singh from posting DIY comedy sketches in the early days of YouTube to today hosting a late-night talk show and connecting with 15M followers (and counting!) around the world. ",
      istopRate: true
    },
    {
      id: 2,
      title: 'How to Speak Confidently On Camera: A Guide for Content Creators',
      creationDate: new Date(2021, 10, 7),
      duration: 63,
      description: "Video plays a massive role in our lives. It helps us get informed on the world and to learn new things. The ability to express oneself on video is an extremely important skill in the 21st century, and it's only going to become more valuable. Being able to speak on camera has played a major role in building my entire career. ",
      istopRate: false
    },
    {
      id: 3,
      title: 'Going Viral: Write, Film & Make Content People Share',
      creationDate: new Date(2021, 3, 25),
      duration: 160,
      description: "Join writer, comedian & social media star Matt Bellassai to learn how to create hit online content that people read, watch, follow & share! Matt Bellassai is famous for his irreverent takes on adulthood. Whether you follow his hilarious Twitter feed, watch his weekly Facebook series To Be Honest, or saw him formerly star in Buzzfeed's Whine About It, there's a good chance you've laughed at his jokes.",
      istopRate: false
    },
    {
      id: 4,
      title: 'Going Viral: Write, Film & Make Content People Share',
      creationDate: new Date(2021, 3, 25),
      duration: 58,
      description: "Join writer, comedian & social media star Matt Bellassai to learn how to create hit online content that people read, watch, follow & share! Matt Bellassai is famous for his irreverent takes on adulthood. Whether you follow his hilarious Twitter feed, watch his weekly Facebook series To Be Honest, or saw him formerly star in Buzzfeed's Whine About It, there's a good chance you've laughed at his jokes.",
      istopRate: true
    }
  ]

  public getAll(): Array<ICource>{
    return this.videoCources;
  }

  public add() {
    console.log('New cource added');
  }

  public getById(id: number): ICource | null {
    let cource = this.videoCources.find(c => c.id === id);
    return cource ? cource : null ;
  }

  public edit(changedCource: ICource) {
    console.log('Edit cource')

  }

  public remove(id: number){
    this.videoCources = this.videoCources.filter(c => c.id != id);
  }
}
