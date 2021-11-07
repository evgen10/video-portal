import { Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/core/models/cource';

@Component({
  selector: 'cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit {

  public videoCources: Array<ICource> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //just for prove track by works
  public addCource() {
    this.videoCources = [
      {
        id: 1,
        title: 'Social Media Success: Video Storytelling on YouTube & Beyond',
        creationDate: new Date(2022, 3, 25),
        duration: 250,
        description: "Videos go viral for a reason: because they capture a truth or tell a story that resonates with viewers. Whether silly or sincere, an authentic story makes you feel seen, feel good, and feel like part of a community. Storytelling is also the engine that’s powered Lilly Singh from posting DIY comedy sketches in the early days of YouTube to today hosting a late-night talk show and connecting with 15M followers (and counting!) around the world. ",
        istopRate: true
      },
      {
        id: 2,
        title: 'How to Speak Confidently On Camera: A Guide for Content Creators',
        creationDate: new Date(2021, 10, 7),
        duration: 250,
        description: "Video plays a massive role in our lives. It helps us get informed on the world and to learn new things. The ability to express oneself on video is an extremely important skill in the 21st century, and it's only going to become more valuable. Being able to speak on camera has played a major role in building my entire career. ",
        istopRate: false
      },
      {
        id: 3,
        title: 'Going Viral: Write, Film & Make Content People Share',
        creationDate: new Date(2021, 3, 25),
        duration: 250,
        description: "Join writer, comedian & social media star Matt Bellassai to learn how to create hit online content that people read, watch, follow & share! Matt Bellassai is famous for his irreverent takes on adulthood. Whether you follow his hilarious Twitter feed, watch his weekly Facebook series To Be Honest, or saw him formerly star in Buzzfeed's Whine About It, there's a good chance you've laughed at his jokes.",
        istopRate: false
      },
      {
        id: 4,
        title: 'Going Viral: Write, Film & Make Content People Share',
        creationDate: new Date(2021, 3, 25),
        duration: 250,
        description: "Join writer, comedian & social media star Matt Bellassai to learn how to create hit online content that people read, watch, follow & share! Matt Bellassai is famous for his irreverent takes on adulthood. Whether you follow his hilarious Twitter feed, watch his weekly Facebook series To Be Honest, or saw him formerly star in Buzzfeed's Whine About It, there's a good chance you've laughed at his jokes.",
        istopRate: false
      }
    ]

  }

  public trackById(index: number, cource: ICource) : number{
    return cource?.id
  }

  public courceDelete(id: any) {
    console.log(`Video cource ${id}`)
  }

  public loadMore(){
    console.log('Load more button');
  }

}
