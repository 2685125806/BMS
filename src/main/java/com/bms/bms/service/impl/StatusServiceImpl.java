package com.bms.bms.service.impl;

import com.bms.bms.entity.Status;
import com.bms.bms.mapper.StatusMapper;
import com.bms.bms.service.StatusService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wx
 * @since 2020-05-24
 */
@Service
public class StatusServiceImpl extends ServiceImpl<StatusMapper, Status> implements StatusService {

}
