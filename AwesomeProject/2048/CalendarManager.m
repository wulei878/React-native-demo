//
//  CalendarManager.m
//  2048
//
//  Created by Owen on 15/11/6.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "RCTBridgeModule.h"

@interface CalendarManager()<RCTBridgeModule>

@end

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  
}
@end
